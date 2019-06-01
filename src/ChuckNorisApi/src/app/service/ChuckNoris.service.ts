import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PagerService } from './pager.service';

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

  public GetDetailCategory(data: string)
  {
    return this.http.get<IcategoryDetail>(`https://api.chucknorris.io/jokes/random?category=${data}`) // Dev moet nog wel user input worden
  }

  public GetSearch(search: string)
  {
    return this.http.get<Isearch>(`https://api.chucknorris.io/jokes/search?query=${search}`) // Dev moet hier ook nog user input worden
  }

  
  public GetwithID()
  {
    return this.http.get("https://api.chucknorris.io/jokes/GMkUENKvSySHbWdUzh8kvA") 
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