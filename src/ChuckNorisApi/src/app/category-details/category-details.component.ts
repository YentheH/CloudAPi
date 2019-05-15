import { Component, OnInit } from '@angular/core';
import { IcategoryDetail, ChuckNorisService } from '../service/ChuckNoris.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  DetialCategory: IcategoryDetail
  constructor(private svc: ChuckNorisService) { }

  ngOnInit() {
    this.svc.GetDetailCategory().subscribe(d => {this.DetialCategory = d})
  }

}
