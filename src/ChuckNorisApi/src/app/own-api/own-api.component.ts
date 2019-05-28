import { Component, OnInit } from '@angular/core';
import { IOwnJoke, OwnJokeService, Ibuffer, IcreateJoke } from '../service/OwnJoke.service';

@Component({
  selector: 'app-own-api',
  templateUrl: './own-api.component.html',
  styleUrls: ['./own-api.component.scss']
})
export class OwnApiComponent implements OnInit {
  OwnJokeList: Ibuffer
  value = ''
  jokeID: IOwnJoke
  OwnJoke: IcreateJoke = {'value': 't'}
  error: string
  
  constructor(private svc: OwnJokeService) { }

  ngOnInit() {
    this.svc.GetOwnJokelist().subscribe(d => {this.OwnJokeList = d;});

  }
  
  onEnter(value: string) 
  { 
    this.value = value;
    this.svc.GetID(value).subscribe(d => {this.jokeID = d})
  }
  
  createJoke(joke: string)
  {
    //this.OwnJoke.category = category
    //this.OwnJoke.id = ID
    //this.OwnJoke.value = value
    this.OwnJoke.value = joke
    this.svc.postJoke(this.OwnJoke).subscribe(d => {this.OwnJoke = d})
  }

  deleteJoke(id: number)
  {
    this.svc.deleteJoke(id).subscribe()
  }

}
