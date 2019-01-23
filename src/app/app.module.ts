import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TrainerComponent } from './trainer/trainer.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClassesComponent,
    TimeTableComponent,
    TrainerComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
