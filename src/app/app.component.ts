import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(){
  /* setTimeout(()=>{
  this.title="this is changed";
  },2000); */
  }

}
