import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { LocationScreenComponent } from './components/location-screen/location-screen.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'home', component: LocationScreenComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
