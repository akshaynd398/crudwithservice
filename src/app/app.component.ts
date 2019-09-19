import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpserver';
 customerObservable: Observable<Customer[]>;
 CustomerObj:Customer;
  name: string="";
  email: string="";
  id: number;
  tel: string="";   

  constructor(private apiService : ApiService)
  {

  }



  saveAll()
  {

    this.CustomerObj=new Customer(this.id,this.name,this.email,this.tel);
    this.apiService.addCustomer(this.CustomerObj).subscribe((data)=>{console.log(data)});
    this.customerObservable=this.apiService.getCustomers();
  }



  update()
{
  this.CustomerObj=new Customer(this.id,this.name,this.email,this.tel);

  this.apiService.editCustomer(this.CustomerObj).subscribe();
  this.customerObservable=this.apiService.getCustomers();
}


edit()
{
  this.CustomerObj=new Customer(this.id,this.name,this.email,this.tel);

  this.apiService.updateCustomer(this.CustomerObj).subscribe();
  this.customerObservable=this.apiService.getCustomers();
}

delete()
{

  this.CustomerObj=new Customer(this.id,this.name,this.email,this.tel);
  this.apiService.deleteCustomer(this.CustomerObj).subscribe((data)=>{console.log(data)});
  this.customerObservable=this.apiService.getCustomers();
}

ngOnInit()
{
// this.CustomerObj=new Customer(1,"updatedname","updatedmail@bie.in","000000");
// //this.apiService.addCustomer(this.CustomerObj).subscribe((data)=>{console.log(data)});   //add customer

// this.apiService.editCustomer(this.CustomerObj).subscribe((data)=>{console.log(data)}); //edit customer
//this.apiService.getCustomers().subscribe((data)=>console.log(data[0]));
   
this.customerObservable=this.apiService.getCustomers();


  // deleteTraveller(id){
  //   console.log("deleting "+ id);
  //   this.dataAccess.deleteTraveller(id).subscribe(
  //     (msg) => console.log(msg),
  //     (error) => console.log(error)
  //   );
  // }



}


}


