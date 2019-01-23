import { Component, OnInit } from '@angular/core';
import {TrainersService} from '../services/trainers.service';
import {HttpClient} from '@angular/common/http';
import {Trainers} from '../interfaces/trainers'

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  API_ENDPOINT= 'http://localhost:8000/api';
  trainers: Trainers[];
  constructor(private trainersService: TrainersService, private httpClient: HttpClient) {
    //seems like url:this is deprecated as of angular 6 ??
    httpClient.get(this.API_ENDPOINT + '/trainers').subscribe(data=>{
      this.trainers=data;
    });
  }
  
  ngOnInit() {
  }

}
