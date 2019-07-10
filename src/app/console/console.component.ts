import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../console.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  

  constructor(private _console: ConsoleService) { 
  }

  ngOnInit() {
  }

}
