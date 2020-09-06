import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
adminlist;

  constructor(
    private service : ProductService) { }

  ngOnInit() {
    this.service.getadmins()
      .subscribe(response=>{
        this.adminlist = response;
        console.log('response is=',response)
      },
      error=>{
        console.log('error is=',error)
      })
    
  }
 
  
}

