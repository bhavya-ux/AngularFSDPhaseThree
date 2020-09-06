import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:9001/shoppingcart/api";
    
   }
   public getproducts()
  {
    return this.http.get(this.url+"/product");
  }
  public searchproduct(id:number)
  {
    return this.http.get(this.url+"/product/"+id);
  }
  public getusers()
  {
    return this.http.get(this.url+"/user");
  }
  public addproduct(product)
  {
    return this.http.post(this.url+"/product",product);
  }
  public searchuser(id:number)
  {
    return this.http.get(this.url+ "/user/"+id);
  }
  public adduser(user)
  {
    return this.http.post(this.url+"/user",user);
  }
  public getadmins()
  {
    return this.http.get(this.url+"/admin");
  }
  public addadmin(admin)
  {
    return this.http.post(this.url+"/admin",admin);
  }
}
