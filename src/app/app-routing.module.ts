import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorListComponent } from './visitor/visitor-list/visitor-list.component';

const routes: Routes = [
  {
    path: "",
    component: VisitorListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
