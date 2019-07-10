import { Component } from '@angular/core';
import { ConsoleService } from './console.service';

import { from } from 'rxjs';
import { TraslateService } from './traslate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'MarmiMosti';
  
 

  constructor( private _translate : TraslateService) { }

}

