import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [  
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  { 
    path: 'stats', 
    component: StatsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
