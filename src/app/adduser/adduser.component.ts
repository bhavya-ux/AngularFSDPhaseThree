import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user;
  addeduser;

  constructor(
    private service : ProductService,
    private router : Router
  ) { }

  ngOnInit() {
    this.user = {
      "firstName": "",
        "lastName": "",
        "address": "",
        "age": null,
        "registeredDate": "",
        "emailId": "",
        "password": "",
        "id": null
    }

    }
  
  adduser()
  {
    this.service.adduser(this.user).subscribe(response =>{
      console.log(response)
      this.addeduser = response;
      this.router.navigate(['/userlist'])
      
    },
    error=>{
      console.log(error)
      this.addeduser = error;
      this.router.navigate(['/userlist'])
    })
  } 
  }



