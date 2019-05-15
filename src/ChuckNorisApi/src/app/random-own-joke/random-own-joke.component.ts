
//Nu is dit even met de andere api maar normaal met de eigen api
import { Component, OnInit } from '@angular/core';
import { Ijoke, ChuckNorisService } from '../service/ChuckNoris.service';

@Component({
  selector: 'app-random-own-joke',
  templateUrl: './random-own-joke.component.html',
  styleUrls: ['./random-own-joke.component.scss']
})
export class RandomOwnJokeComponent implements OnInit {
  OwnJoke: Ijoke
  constructor(private svc: ChuckNorisService) { }

  ngOnInit() {
    this.svc.GetJoke().subscribe(d => {this.OwnJoke = d})
  }

}
