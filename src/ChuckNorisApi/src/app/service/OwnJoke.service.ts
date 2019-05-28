import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OwnJokeService {
  constructor(private http: HttpClient) { }
  data = {}
  public GetOwnJokelist()
  {
    return this.http.get<Ibuffer>("http://localhost:50073/api/joke");
  }

  public GetID(id: string)
  {
    return this.http.get<IOwnJoke>(`http://localhost:50073/api/joke/${id}`)
  }

  public postJoke(joke: IcreateJoke): Observable<IcreateJoke>
  {
    return this.http.post<IcreateJoke>(`http://localhost:50073/api/joke`, joke)
  }

  public deleteJoke(id: number): Observable<{}>
  {
    return this.http.delete(`http://localhost:50073/api/joke/${id}`)
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

export interface IcreateJoke {
  value: string;
}