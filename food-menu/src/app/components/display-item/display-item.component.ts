import { Component, OnInit } from '@angular/core';
import { ItemServicesService } from 'src/app/services/item-services.service';
import { Item } from 'angular2-multiselect-dropdown';
import { MenuItem } from 'src/app/classes/shared';

@Component({
  selector: 'display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit {


  constructor(private itemServicesService: ItemServicesService) { }

  ngOnInit() {
    this.itemServicesService.currentMessage.subscribe(
      () => {
        console.log('display ', this.itemServicesService.itemList);
      }
      )
  }

  onClick(item) {
    let deletedId:number;
    let _itemList : MenuItem[]= this.itemServicesService.itemList;
    for(let i=0; i < _itemList.length; i++){
         if(item.id==_itemList[i].id){
          deletedId=item.id;
          break;
         }
    }

    this.itemServicesService.itemList = this.itemServicesService.itemList.filter(function(item) {
      return item.id !== deletedId
  })

  }

}
