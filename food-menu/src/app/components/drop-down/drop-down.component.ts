import { Component, OnInit } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {ItemServicesService} from '../../services/item-services.service'
import { MenuItem } from '../../classes/shared';

@Component({
  selector: 'item-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor(private itemServicesService:ItemServicesService){

  }

  itemList = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit(){
      this.dropdownList = this.itemServicesService.allItemList;
      this.selectedItems = this.itemServicesService.selectedItem;
      this.dropdownSettings = { 
                                singleSelection: true, 
                                text:"Select Countries",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                 classes:"myclass custom-class"
                              };            
  }
  onItemSelect(item:any){
      this.addToItemList(item);
  }
  OnItemDeSelect(item:any){
  
  }
  onSelectAll(items: any){
     
  }
  onDeSelectAll(items: any){
     
  }

  addToItemList(item:MenuItem){

    let isToAdded : Boolean= true;
    let _itemList : MenuItem[]= this.itemServicesService.itemList;
    for(let i=0; i < _itemList.length; i++){
         if(item.id==_itemList[i].id){
           isToAdded=false;
         }
    }
    if(isToAdded)
    this.itemServicesService.addItemToItemList(item);
    
  }


}
