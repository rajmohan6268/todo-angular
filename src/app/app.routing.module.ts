import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEditUserComponent } from "./users/addEditUser/addEditUser.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users/add",
    component: AddEditUserComponent
  },
  {
    path: "users/:id",
    component: AddEditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
