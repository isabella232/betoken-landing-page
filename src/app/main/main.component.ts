import { Component, OnInit } from '@angular/core';
import { ApolloEnabled } from '../apollo';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BigNumber } from 'bignumber.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent extends ApolloEnabled implements OnInit {
  isLoading: Boolean;
  roiOneMonth: BigNumber;
  roiSinceInception: BigNumber;
  apr: BigNumber;
  aum: BigNumber;
  numOfManagers: BigNumber;
  endTimeOfCyclePhase: number;
  countdownTimer: any;
  countdownPhase: string;
  countdownDay: number;
  countdownHour: number;
  countdownMinute: number;
  countdownSecond: number;

  constructor(private apollo: Apollo) {
    super();
    this.isLoading = true;

    this.roiOneMonth = new BigNumber(0);
    this.roiSinceInception = new BigNumber(0);
    this.aum = new BigNumber(0);
    this.numOfManagers = new BigNumber(0);

    this.endTimeOfCyclePhase = 0;
    this.countdownPhase = 'INTERMISSION';
    this.countdownDay = 0;
    this.countdownHour = 0;
    this.countdownMinute = 0;
    this.countdownSecond = 0;
  }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery({
        query: gql`
          {
            fund(id: "BetokenFund") {
              aum
              cyclePhase
              totalFundsAtPhaseStart
              startTimeOfCyclePhase
              sharesPrice
              managers(first: 1000, where: {kairoBalanceWithStake_gt: 0}) {
                id
              }
            }
          }
        `
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.isLoading = loading;

        let fund = data['fund'];
        this.roiOneMonth = fund.cyclePhase === 'INTERMISSION' ? new BigNumber(0) : new BigNumber(fund.aum).div(fund.totalFundsAtPhaseStart).minus(1).times(100);
        this.roiSinceInception = new BigNumber(fund.sharesPrice).minus(1).times(100);
        this.apr = this.roiOneMonth.div(100).plus(1).pow(12).minus(1).times(100);
        this.aum = new BigNumber(fund.aum);
        this.numOfManagers = new BigNumber(fund.managers.length);
        
        // countdown timer
        const minute = 60; // 1 minute = 60 seconds
        const hour = 60 * minute; // 1 hour = 60 minutes
        const day = 24 * hour; // 1 day = 24 hours
        const startTimeOfCyclePhase = +fund.startTimeOfCyclePhase;
        this.countdownPhase = fund.cyclePhase;
        this.endTimeOfCyclePhase = fund.cyclePhase === 'INTERMISSION' ? 3 * day + startTimeOfCyclePhase : 27 * day + startTimeOfCyclePhase;
        if (this.countdownTimer) clearInterval(this.countdownTimer);
        this.countdownTimer = setInterval(() => {
          const now = Math.floor(new Date().getTime() / 1e3);
          const distance = this.endTimeOfCyclePhase - now;
          if (distance >= 0) {
            this.countdownDay = Math.floor(distance / day);
            this.countdownHour = Math.floor((distance % day) / hour);
            this.countdownMinute = Math.floor((distance % hour) / minute);
            this.countdownSecond = Math.floor(distance % minute);
          } else {
            clearInterval(this.countdownTimer);
          }
        }, 1e3);
      });
  }
}