import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListCardComponent } from './ticket/ticket-list-card/ticket-list-card.component';
import { VisitorListComponent } from './visitor/visitor-list/visitor-list.component';

const routes: Routes = [
  {
    path: "",
    component: VisitorListComponent,
  },
  {
    path: "ticket-list",
    component: TicketListCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
