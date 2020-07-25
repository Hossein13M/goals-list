import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GoalsListComponent } from "./goals-list/goals-list.component";

const routes: Routes = [
  { component: GoalsListComponent, path: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
