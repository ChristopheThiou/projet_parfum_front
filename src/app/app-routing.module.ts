import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParfumComponent } from './list-parfum/list-parfum.component';
import { HomeComponent } from './home/home.component';
import { SingleParfumComponent } from './single-parfum/single-parfum.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'single-parfum/:id', component: SingleParfumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
