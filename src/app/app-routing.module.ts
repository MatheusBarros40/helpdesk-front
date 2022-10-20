import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import {HomeComponent} from "./components/home/home.component";
import {TecnicoListComponent} from "./components/tecnico/tecnico-list/tecnico-list.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
    {path:'login', component: LoginComponent},
  {path:'', component:NavComponent, children:[
      {path:'home', component:HomeComponent},
      {path:'tecnicos', component:TecnicoListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
