import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserProfileComponent} from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'home', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
