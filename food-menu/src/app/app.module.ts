import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { DisplayItemComponent } from './components/display-item/display-item.component';
import { ShowNeededComponent } from './components/show-needed/show-needed.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import {FormsModule} from '@angular/forms';
import {ItemServicesService} from './services/item-services.service'

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    DisplayItemComponent,
    ShowNeededComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule
  ],
  providers: [ItemServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
