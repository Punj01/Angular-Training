import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TRAINEES } from '../dummy-data';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.css']
})
export class TraineesComponent implements OnInit {

  trainees = TRAINEES;

  choosenTrainee: Trainee;

  constructor() { }

  ngOnInit() {
  }

  onSelect(trainee: Trainee): void {
    this.choosenTrainee = trainee;
  }

}
