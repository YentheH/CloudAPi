import { Component, OnInit } from '@angular/core';
import { ChuckNorisService, Ijoke, IcategoryDetail, IcategoryList } from '../service/ChuckNoris.service'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  listCategory: IcategoryList
  DetialCategory: IcategoryDetail
  constructor(private svc: ChuckNorisService) { }

  ngOnInit() {
    this.svc.GetCategoryList().subscribe(d => {this.listCategory = d})
  }

  onClickMe(category: string) {
    this.svc.GetDetailCategory(category).subscribe(d => {this.DetialCategory = d})
  }
}
