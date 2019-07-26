import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';
import { FriendsComponent } from './friends/friends.component';
import { FundingComponent } from './funding/funding.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
  {
    path: 'funding',
    component: FundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
