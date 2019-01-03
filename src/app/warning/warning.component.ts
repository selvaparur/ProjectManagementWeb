import { Component, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent {

  @Input() modalId: string = 'app-warning';
    
  @Output() valuechangee  = new EventEmitter();
   

  valueChanged() { // You can give any function name        
      var counter = "yes";                   
      this.valuechangee.emit(counter);      
  }

  noclick()
  {
    
  }


  constructor() { }

}
