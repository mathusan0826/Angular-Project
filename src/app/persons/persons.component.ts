import { Component,OnInit } from '@angular/core';
import { RESTAPIServiceService } from '../restapiservice.service';//apram tava not error
import { Router } from '@angular/router';
import { PersonsService } from '../services/persons.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  //name= '';
  //email= '';
  person:any;
  

  //constructor(private service: RESTAPIServiceService, private router: Router) { }
  constructor(private fb:FormBuilder,private service: PersonsService , private router: Router,) { 
    this.person =this.fb.group(
      {
       
        Name:['',Validators.required],
        Email:['',Validators.required],
       
      }
    )
  }
  ngOnInit(): void {
    this.loadperson();

}
saveOrder() {

  console.log(this.person.value);
  this.service.postperson(this.person.value).subscribe((data:any)=>{
    console.log(data);
    this.router.navigate(['/person'])
    window.location.reload();
  })
}
loadperson(){
  this.service.getperson().subscribe((data:any)=> {
   console.log("getingorder",data);
    
    this.person=data;
  })
}
delperson(datas:any){
  this.service.deleteperson(datas._id).subscribe(data =>{
    console.log(data);
    this. person = this. person.filter((u:any)=>u!==datas)
  })
}
}
