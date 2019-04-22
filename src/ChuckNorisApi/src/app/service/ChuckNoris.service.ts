import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChuckNorisService {
  constructor(private http: HttpClient) { }

  public GetJoke()
  {
    return this.http.get<Ijoke>(" https://api.chucknorris.io/jokes/random");
  }


}
export interface Ijoke {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}