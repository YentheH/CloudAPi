import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OwnJokeService {
  constructor(private http: HttpClient) { }
  public GetOwnJokelist()
  {
    return this.http.get<IlistOwnJoke>("http://localhost:50073/api/joke");
  }

}
export interface IlistOwnJoke {
    id: number;
    value: string;
    category: string;
}