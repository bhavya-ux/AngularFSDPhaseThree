import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.css']
})
export class ProductByIdComponent implements OnInit {
  private productid;
  private id;

  constructor(private product : ProductService) 
    { }

  ngOnInit() {
  }
 searchproduct()
 {
   this.product.searchproduct(this.id).subscribe(response=>{
     this.productid = response;
     console.log('response is = ', this.productid)
   },
   error=>{
    console.log('error is=',error)
  })
 }
}

