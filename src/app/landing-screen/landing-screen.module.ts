import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LandingScreenRoutingModule } from './landing-screen-routing.module';
import { LandingScreenComponent } from './landing-screen.component';


@NgModule({
  imports: [
    SharedModule,
    LandingScreenRoutingModule
  ],
  declarations: [
    LandingScreenComponent,
    HomeComponent
  ],
})
export class LandingScreentModule { }
