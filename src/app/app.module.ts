import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
  MatNativeDateModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule
} from '@angular/material';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { NewCardComponent } from './new-card/new-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequestCamelCaseToSnakeCaseService } from './shared/request-camel-case-to-snake-case.service';
import { ResponseSnakeCaseToCamelCaseService } from './shared/response-snake-case-to-camel-case.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/http.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: NewCardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CardComponent,
    NewCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes),
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: HTTP_INTERCEPTORS, useClass: RequestCamelCaseToSnakeCaseService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseSnakeCaseToCamelCaseService, multi: true },
    HttpClient,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
