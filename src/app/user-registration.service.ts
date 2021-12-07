import { Injectable } from '@angular/core';
import {httpClient} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(http:httpClient) { }

  public doRegistration(user)
  {
  return this.http.post("",user, {responseType})
  }
}
