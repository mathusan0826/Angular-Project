import { Component,OnInit } from '@angular/core';
import { RESTAPIServiceService } from '../restapiservice.service';//apram tava not error
import { Router } from "@angular/router"
import { FormBuilder, Validators } from "@angular/forms"
import { ProductService} from '../services/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  productItem:any;

  //constructor(private service: RESTAPIServiceService, private router: Router) { }

  constructor(private fb:FormBuilder,private service: ProductService, private router: Router) { 
    this.productItem =this.fb.group(
      {
      
        Name:['',Validators.required],
        Description:['',Validators.required],
        Categories:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.loadproductItem();

}
  // loadOrders() {
  //   throw new Error('Method not implemented.');

  
  // }

  

saveOrder() {

  //let order = {  No: this.no,      Name: this.name,    Quntity: this.quntity, Price: this.price, Total: this.total,  Date: this.date   };
  console.log(this.productItem.value);
  this.service.postproductItem(this.productItem.value).subscribe((data:any)=>{
    console.log(data);
    this.router.navigate(['/productItem'])
    
  })
}
//     error: (err) => { console.error(err) },
//     complete: () => { this.router.navigate(['listorders']) }
//   });
// }
loadproductItem(){
  this.service.getproductItem().subscribe((data:any)=> {
   console.log("getingorder",data);
    
    this.productItem=data;
  })
}
delproductItem(datas:any){
  this.service.deleteproductItem(datas._id).subscribe(data =>{
    console.log(data);
    this.productItem = this.productItem.filter((u:any)=>u!==datas)
  })
}
}

