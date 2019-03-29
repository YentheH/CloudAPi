import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChuckNorisService {
  rootUrl = "https://api.chucknorris.io/jokes/"
  constructor(private http: HttpClient) { }

  public GetJoke()
  {
    return this.http.get<Ijoke>(`${this.rootUrl}/random`);
  }


}
export interface Ijoke {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}