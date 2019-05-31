import { Component, OnInit } from '@angular/core';
import { Isearch, IResult, ChuckNorisService } from '../service/ChuckNoris.service';
import { PagerService } from '../service/pager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  SearchList: Isearch
  ListItem: IResult
  inputUser = ''
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];
  
  constructor(private svc: ChuckNorisService, private pagerService: PagerService) { }

  ngOnInit() {
  }

  search(InputUser: string){
    this.inputUser = InputUser
    this.svc.GetSearch(InputUser).subscribe(d => {this.SearchList = d; this.allItems = this.SearchList.result; this.setPage(1);})
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
