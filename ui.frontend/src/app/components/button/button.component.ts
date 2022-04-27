import { Component, Input, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string;  

  constructor() {}

  ngOnInit(): void {
  }

}

MapTo('angularapp/components/button')(ButtonComponent);
