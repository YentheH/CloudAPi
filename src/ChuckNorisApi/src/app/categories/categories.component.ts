import { Component, OnInit } from '@angular/core';
import { ChuckNorisService, Ijoke, IcategoryDetail, IcategoryList } from '../service/ChuckNoris.service'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  listCategory: IcategoryList
  constructor(private svc: ChuckNorisService) { }

  ngOnInit() {
    this.svc.GetCategoryList().subscribe(d => {this.listCategory = d})

  }

}
