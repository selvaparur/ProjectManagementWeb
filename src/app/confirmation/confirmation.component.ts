import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

@Input() confirmid:'app-confirmation';

  constructor() { 
    console.log('confirm called');
  }

  ngOnInit() {
  }

}
