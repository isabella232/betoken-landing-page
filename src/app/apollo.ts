import { Subscription } from 'apollo-client/util/Observable';
import { OnDestroy } from '@angular/core';

export class ApolloEnabled implements OnDestroy {
  querySubscription: Subscription;

  constructor() {
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}