import { Component, OnInit, Input } from '@angular/core';
import { TraslateService, Lingue } from '../traslate.service';
import { ConsoleService } from '../console.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() utente: String;

  
  private Bottoni : String [];
  private _otherLang : String[];
  constructor(private _translateService: TraslateService, private _console : ConsoleService) {  }


  public changeLanguage(event, element) {
    this._console.append("Cambio lingua in: " + element);
    this._translateService.setLanguage(element);
    this._console.append("Lingua cambiata");
  }

  ngOnInit() {
    this._console.append("Inizializzo l'header");
    this._console.append("La lingua è: " + this._translateService.CurrentLanguage);
  }

}
