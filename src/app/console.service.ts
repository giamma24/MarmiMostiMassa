import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
public Text : String[];

  public append(txt : String){
    this.Text.push(""+txt);
  }

  constructor() { this.Text =[ "--- Console inizializzata -- " ];}
}
