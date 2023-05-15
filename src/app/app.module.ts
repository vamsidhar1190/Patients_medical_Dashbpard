import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule } from 'primeng/calendar';
import { NgApexchartsModule } from "ng-apexcharts";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';





@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    NgApexchartsModule,
    ChartModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }