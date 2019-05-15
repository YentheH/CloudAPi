import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChuckNorisService {
  constructor(private http: HttpClient) { }

  public GetJoke()
  {
    return this.http.get<Ijoke>(" https://api.chucknorris.io/jokes/random");
  }

  public GetCategoryList()
  {
    return this.http.get<IcategoryList>("https://api.chucknorris.io/jokes/categories")
  }

  public GetDetailCategory()
  {
    return this.http.get<IcategoryDetail>("https://api.chucknorris.io/jokes/random?category=food") // Dev moet nog wel user input worden
  }

  public GetSearch()
  {
    return this.http.get<Isearch>("https://api.chucknorris.io/jokes/search?query=dev") // Dev moet hier ook nog user input worden
  }

  // Je kan via id ook zoeken maar dit geeft een al reeds bestaande website weer.
  public GetwithID()
  {
    return this.http.get("https://api.chucknorris.io/jokes/GMkUENKvSySHbWdUzh8kvA") // GMkUENKvSySHbWdUzh8kvA moet nog naar id veranderen via user input
  }

}
export interface Ijoke {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface IcategoryList{
  List: string[]
}

export interface IcategoryDetail {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface IResult {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface Isearch {
  total: number;
  result: IResult[];
}