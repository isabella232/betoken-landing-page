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
  aum: BigNumber;
  numOfManagers: BigNumber;

  constructor(private apollo: Apollo) {
    super();
    this.isLoading = true;

    this.roiOneMonth = new BigNumber(0);
    this.roiSinceInception = new BigNumber(0);
    this.aum = new BigNumber(0);
    this.numOfManagers = new BigNumber(0);
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
              sharesPrice
              managers(first: 1000) {
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
        this.aum = new BigNumber(fund.aum);
        this.numOfManagers = new BigNumber(fund.managers.length);
      });
  }

}
