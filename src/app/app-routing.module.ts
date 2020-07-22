import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'todolist',
    loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
  }
  //{ path: 'todolist', loadChildren: './todo-list/todo-list.module#TodoListModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
