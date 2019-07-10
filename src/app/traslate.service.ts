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

  public TAB1 : String = "";
  public TAB2 : String = "";
  public TAB3 : String = "";

  constructor() { 
    this.CurrentLanguage = Lingue.Italiano;
    this.OtherLanguage = [Lingue.Francese, Lingue.Inglese];
    this.translateMenu();

  }

  public setLanguage (lang: Lingue){

    this.OtherLanguage.push(this.CurrentLanguage);
    this.CurrentLanguage = lang;
    this.OtherLanguage = this.OtherLanguage.filter(item => item !== lang);
    this.translateMenu();
  }

  public getLanguage() : String{

    return this.CurrentLanguage.toString();

  }

    public translateMenu (){
    switch (this.CurrentLanguage){
      case(Lingue.Italiano):
        this.TAB1 = "Chi siamo";
        this.TAB2 = "I nostri lavori";
        this.TAB3 = "Contattaci";  
      break;
      case(Lingue.Inglese):
      this.TAB1 = "About us";
      this.TAB2 = "Our works";
      this.TAB3 = "Contact us";
      break;

      case(Lingue.Francese):
      this.TAB1 = "Francese1";
      this.TAB2 = "Francese2";
      this.TAB3 = "Francese3";
      break;
    }
}

}
