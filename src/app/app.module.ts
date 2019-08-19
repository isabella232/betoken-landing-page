import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';
import { FriendsComponent } from './friends/friends.component';
import { FundingComponent } from './funding/funding.component';
import { HeaderComponent } from './header/header.component';
import { HeaderfriendsComponent } from './headerfriends/headerfriends.component';
import { HeaderfundingComponent } from './headerfunding/headerfunding.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { HeaderstartComponent } from './headerstart/headerstart.component';
import { ModalsComponent } from './modals/modals.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { FooterComponent } from './footer/footer.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MainComponent,
    FriendsComponent,
    FundingComponent,
    HeaderComponent,
    HeaderfriendsComponent,
    HeaderfundingComponent,
    HeaderhomeComponent,
    HeaderstartComponent,
    ModalsComponent,
    PrivacypolicyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
