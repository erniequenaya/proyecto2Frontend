import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TrainerComponent } from './trainer/trainer.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'time-table', component: TimeTableComponent },
  { path: 'trainers', component: TrainerComponent },
  { path: 'blog', component: BlogComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
