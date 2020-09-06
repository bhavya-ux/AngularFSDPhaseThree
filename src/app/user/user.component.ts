import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userlist;

  constructor(private user :ProductService) { }

  ngOnInit() {
     this.user.getusers().subscribe(response=>{
      this.userlist = response;
      console.log('response is=',response)
    },
    error=>{
      console.log('error is=',error)
    })
  }
}
