import { Component, OnInit } from '@angular/core';
import {TrainersService} from '../services/trainers.service';
import {HttpClient} from '@angular/common/http';
import {Trainers} from '../interfaces/trainers'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  API_ENDPOINT= 'http://localhost:8000/api';
  trainers: Trainers[];
  constructor(private trainersService: TrainersService, private httpClient: HttpClient) {
    //seems like url:this is deprecated as of angular 6 ??
    httpClient.get(this.API_ENDPOINT + '/trainers').subscribe(data=>{
      this.trainers=data;
    });
  }
  
    title1 = 'Get Fitness You\'ve Always Dream Of';
    title2 = 'Yet higher percentages of body fat above 25% for men and 30% for women can be health hazard.';
    yoga = 'An irregularity in the body affects the mind and similar unpleasantness or restlessness in the mind can manifest as an ailment in the body';
    gym = 'Take a walk or head to the gym for a quick workout. One of the most common mental benefits of exercise is stress relief';

  ngOnInit() {
  }

}
