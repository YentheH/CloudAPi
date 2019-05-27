import { Component, OnInit } from '@angular/core';
import { IOwnJoke, OwnJokeService, Ibuffer } from '../service/OwnJoke.service';

@Component({
  selector: 'app-own-api',
  templateUrl: './own-api.component.html',
  styleUrls: ['./own-api.component.scss']
})
export class OwnApiComponent implements OnInit {
  OwnJokeList: Ibuffer
  value = ''
  jokeID: IOwnJoke
  
  constructor(private svc: OwnJokeService) { }

  ngOnInit() {
    this.svc.GetOwnJokelist().subscribe(d => {this.OwnJokeList = d;});

  }
  
  onEnter(value: string) 
  { 
    this.value = value;
    this.svc.GetID(value).subscribe(d => {this.jokeID = d})
  }
  
  createJoke()
  {
    
  }

}
