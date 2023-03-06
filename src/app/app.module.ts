import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';

//shared
import { SOME_STR, SOME_TRUE, USE_FACTORY } from './shared/CONSTS';

//modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { FormComponent } from './components/form/form.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { AddedComponentComponent } from './components/dynamic-component/component/added-component.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { UseClassComponent } from './components/dependency-injection/use-class/use-class.component';
import { FakeClassComponent } from './components/dependency-injection/fake-class/fake-class.component';
import { BigClassComponent } from './components/dependency-injection/big-class/big-class.component';
import { PromisesComponent } from './components/promises/promises.component';
import { StrategiesComponent } from './components/strategies/strategies.component';
import { ChildComponent } from './components/strategies/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FormComponent,
    InfiniteScrollComponent,
    DynamicComponentComponent,
    AddedComponentComponent,
    DependencyInjectionComponent,
    UseClassComponent,
    FakeClassComponent,
    BigClassComponent,
    PromisesComponent,
    StrategiesComponent,
    ChildComponent,
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
  providers: [
    {provide: SOME_TRUE, useValue: true},
    {provide: SOME_STR, useValue: SOME_STR},
    FakeClassComponent,
    {provide: UseClassComponent, useClass: FakeClassComponent},
    {provide: BigClassComponent, useExisting: UseClassComponent},
    {provide: USE_FACTORY, useFactory: () => 'some string from factory'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
