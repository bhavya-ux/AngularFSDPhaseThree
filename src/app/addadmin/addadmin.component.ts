import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
admin;
addedadmin;

  constructor(
    private service : ProductService,
  private router : Router
  ) { }

  ngOnInit() {
    this.admin = {
      "adminId": null,
      "adminName": "",
      "adminPass": ""
    }
    }

    addadmin()
    {
      this.service.addadmin(this.admin).subscribe(response =>{
        console.log(response)
        this.addedadmin = response;
        this.router.navigate(['/adminlist'])
      
      },
      error=>{
        console.log(error)
        this.addedadmin= error;
        this.router.navigate(['/adminlist'])
      })
    }
    }
  

