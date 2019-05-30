import { Component, OnInit } from '@angular/core';
import { ChuckNorisService, Ijoke } from '../service/ChuckNoris.service'

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss']
})
export class RandomJokeComponent implements OnInit {
  joke: Ijoke
  constructor(private svc: ChuckNorisService) { }

  ngOnInit() {
    this.svc.GetJoke().subscribe(d => {this.joke = d})
  }
  getNewJoke(){
    this.svc.GetJoke().subscribe(d => {this.joke = d})
  }

}
