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
  OwnJoke: IcreateJoke = {'value': 't', 'category': 't'}
  PutJoke: IOwnJoke = {'category': null, 'id': 0, 'value': ''}
  error: object
  
  constructor(private svc: OwnJokeService) { }

  ngOnInit() {
    this.svc.GetOwnJokelist().subscribe(d => {this.OwnJokeList = d})

  }
  
  onEnter(value: string) 
  { 
    this.value = value;
    this.svc.GetID(value).subscribe(d => {this.jokeID = d})
  }
  
  createJoke(joke: string, category: string)
  {
    this.OwnJoke.value = joke
    this.OwnJoke.category = category
    this.svc.postJoke(this.OwnJoke).subscribe(d => {this.OwnJoke = d, this.svc.GetOwnJokelist().subscribe(d => {this.OwnJokeList = d})})
  }

  deleteJoke(id: number)
  {
    this.svc.deleteJoke(id).subscribe(d => {this.svc.GetOwnJokelist().subscribe(d => {this.OwnJokeList = d})})
  }

  updateJoke(id: number, joke: string)
  {
    this.PutJoke.id = id
    this.PutJoke.value = joke
    this.svc.updateJoke(this.PutJoke).subscribe(d => {this.svc.GetOwnJokelist().subscribe(d => {this.OwnJokeList = d})})
    
  }

}
