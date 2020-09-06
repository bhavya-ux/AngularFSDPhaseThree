import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BindingFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}

  private router: Router
 
  title = 'Sporty-Shoes-App';
  ngOnInit(){
  }
 
}
