import { Component, OnInit } from '@angular/core';
import { IlistOwnJoke, OwnJokeService } from '../service/OwnJoke.service';

@Component({
  selector: 'app-own-api',
  templateUrl: './own-api.component.html',
  styleUrls: ['./own-api.component.scss']
})
export class OwnApiComponent implements OnInit {
  OwnJokeList: IlistOwnJoke
  constructor(private svc: OwnJokeService) { }

  ngOnInit() {
    this.svc.GetOwnJokelist().subscribe(d => {this.OwnJokeList = d})
  }

}
