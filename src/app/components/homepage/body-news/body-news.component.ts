import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';

@Component({
  selector: 'app-body-news',
  templateUrl: './body-news.component.html',
  styleUrls: ['./body-news.component.scss']
})
export class BodyNewsComponent implements OnInit {

  houseList: any[];
  categoryHouseList: any[];
  categoryRoomList: any[];
  isShowForm = false;
  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
    this.componentsService.listHouse().subscribe( result => {
      this.houseList = result;
    });
    this.componentsService.listCategoryHouse().subscribe( result => {
      this.categoryHouseList = result;
    });
    this.componentsService.listCategoryRoom().subscribe( result1 => {
      this.categoryRoomList = result1;
    });
  }

}
