import { Injectable } from '@angular/core';

export enum Lingue {
  Italiano = "ITA",
  Francese = "FRA",
  Inglese = "ENG"
}

@Injectable({
  providedIn: 'root'
})
export class TraslateService {

  public CurrentLanguage : String;
  public OtherLanguage : String[];

  constructor() { 
    this.CurrentLanguage = Lingue.Italiano;
    this.OtherLanguage = [Lingue.Francese, Lingue.Inglese];
  }

  public setLanguage (lang: Lingue){

    this.OtherLanguage.push(this.CurrentLanguage);
    this.CurrentLanguage = lang;
    

  }

  public getLanguage() : String{

    return this.CurrentLanguage.toString();

  }


}


