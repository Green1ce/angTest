import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { FormComponent } from './form/form.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { AddedComponentComponent } from './dynamic-component/component/added-component.component';

//modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FormComponent,
    InfiniteScrollComponent,
    DynamicComponentComponent,
    AddedComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSelectInfiniteScrollModule,
    NgxMatSelectSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
