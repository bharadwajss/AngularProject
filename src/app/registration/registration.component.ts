import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user:User=new User("","",0,"");
message:any
  constructor(private service.UserRegistrationService) { }

  ngOnInit(): void {
  }
public registerNow()
{
}
}
