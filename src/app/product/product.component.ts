import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product: ProductService) { }
  productlist;
  
    ngOnInit() {
      this.product.getproducts()
      .subscribe(response=>{
        this.productlist = response;
        console.log('response is=',response)
      },
      error=>{
        console.log('error is=',error)
      })
    }
  }


