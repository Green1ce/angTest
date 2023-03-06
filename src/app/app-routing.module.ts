import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { PromisesComponent } from './components/promises/promises.component';
import { StrategiesComponent } from './components/strategies/strategies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'inf-scroll', component: InfiniteScrollComponent },
  { path: 'dynamic', component: DynamicComponentComponent },
  { path: 'dependency', component: DependencyInjectionComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'strategies', component: StrategiesComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
