import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { ProductItemComponent } from './product-item/product-item.component';
//import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RESTAPIServiceService} from './restapiservice.service';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { AddOrEditorderComponent } from './orders/add-or-editorder/add-or-editorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderComponent } from './orders/orders.component';


const routes: Routes = [
  {path:'order',component:OrderComponent},
  {path:'product-item',component:ProductItemComponent},
  {path:'persons',component:PersonsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    ProductItemComponent,
   ItemListComponent,
    AddOrEditorderComponent,
   OrderFormComponent,
   OrderComponent
    //OrdersComponent,
    //OrderComponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    ModalModule.forRoot(),
   
    HttpClientModule,
    RouterModule.forRoot(routes),CommonModule, BrowserAnimationsModule
  // FontAwesomeModule
  
  ],
  providers: [RESTAPIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
