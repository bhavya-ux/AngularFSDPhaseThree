import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  private id;
  private userid;

  constructor(
    private user : ProductService
  ) { }

  ngOnInit() {
  }
  searchuser()
  {
    this.user.searchuser(this.id).subscribe(response=>{
      this.userid = response;
      console.log('response is = ', this.userid)
    },
    error=>{
     console.log('error is=',error)
   })
  }
  }

 