import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged: boolean = false;
  private _passwordhidden: string = 'ciao';

  constructor() { }

  getCurrentUser():String{
      if (!this._isLogged)
        return "";
      
      return "Sabrina";
        
  }
}


