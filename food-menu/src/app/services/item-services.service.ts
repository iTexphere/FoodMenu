import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MenuItem} from '../classes/shared'
  
@Injectable()
export class ItemServicesService {

  public itemList : MenuItem []=[];
  public allItemList: MenuItem[]= [
    {"id":1,"itemName":"India"},
    {"id":2,"itemName":"Singapore"},
    {"id":3,"itemName":"Australia"},
    {"id":4,"itemName":"Canada"},
    {"id":5,"itemName":"South Korea"},
    {"id":6,"itemName":"Germany"},
    {"id":7,"itemName":"France"},
    {"id":8,"itemName":"Russia"},
    {"id":9,"itemName":"Italy"},
    {"id":10,"itemName":"Sweden"},
    {"id":11,"itemName":"Sri Lanka"}
  ];
  public selectedItem:MenuItem[] = [
    {"id":1,"itemName":"India"},
];;
  private itemSouce = new BehaviorSubject({});
  currentMessage = this.itemSouce.asObservable();

  constructor() {

   }

  addItemToItemList(item: MenuItem) {
    this.itemList.push(item)
    this.itemSouce.next(item)

  }

}


