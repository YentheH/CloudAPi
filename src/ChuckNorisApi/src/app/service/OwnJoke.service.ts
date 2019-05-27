import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OwnJokeService {
  constructor(private http: HttpClient) { }

  public GetOwnJokelist()
  {
    return this.http.get<Ibuffer>("http://localhost:50073/api/joke");
  }

  public GetID(id: string)
  {
    return this.http.get<IOwnJoke>(`http://localhost:50073/api/joke/${id}`)
  }
}
export interface Ibuffer {
  jokeList: IOwnJoke
}

export interface IOwnJoke {
    id: number;
    value: string;
    category: string;
}