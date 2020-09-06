import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product;
  addedproduct;

  constructor(
  private service : ProductService,
  private router : Router

  ) { }

  ngOnInit() {
    this.product = {
      "productId" : null,
      "dateAdded" : "",
      "price" : null,
      "productName" : "",
      "productgrp" : {
        "productgroupId" : null,
        "productgroupName" : ""
      }
    }
  }
   addproduct()
    {
      this.service.addproduct(this.product).subscribe(response =>{
        console.log(response)
        this.addedproduct= response;
        this.router.navigate(['/productlist'])
      
      },
      error=>{
        console.log(error)
        this.addedproduct= error
        this.router.navigate(['/productlist'])
      })
    }
    }
      
  