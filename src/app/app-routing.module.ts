import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'inf-scroll', component: InfiniteScrollComponent },
  { path: 'dynamic', component: DynamicComponentComponent },
  { path: 'dependency', component: DependencyInjectionComponent },
  { path: 'promises', component: PromisesComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
