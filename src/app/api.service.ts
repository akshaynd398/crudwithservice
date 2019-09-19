import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

getCustomers():Observable<Customer[]>
{

  return this.httpClient.get<Customer[]>
  ("http://localhost:3000/customers");
}

addCustomer(objCust:Customer) : Observable<Customer>
{

return this.httpClient.post<Customer>
("http://127.0.0.1:3000/customers",

{

"name": objCust.name,
"tel" :objCust.tel,
"email" : objCust.email

})

}


editCustomer(objCust:Customer) : Observable<Customer>
{

return this.httpClient.put<Customer>
("http://127.0.0.1:3000/customers" + objCust.id,

{

"name": objCust.name,
"tel" :objCust.tel,
"email" : objCust.email

})

}



updateCustomer(objCust:Customer) : Observable<Customer>
{

return this.httpClient.patch<Customer>
('http://127.0.0.1:3000/customers/' + objCust.id,
{
"name" : objCust.name,
"email" :objCust.email,
"tel" : objCust.tel

})

}


deleteCustomer(objCust:Customer):Observable<Customer>
{
  return this.httpClient.delete<Customer>('http://127.0.0.1:3000/customers/'+objCust.id);



}



}