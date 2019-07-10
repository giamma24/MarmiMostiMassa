import { Component } from '@angular/core';
import {TraslateService} from './traslate.service';
import { ConsoleService } from './console.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarmiMosti';
  private _lang : String;
  
  constructor(private _translateService: TraslateService) { 


  }

}

