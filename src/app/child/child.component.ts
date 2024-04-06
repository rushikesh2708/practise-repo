import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childMessage:string="";
  
  @Input()
  dataFromParent:string="";

  @Output()
  emitMessage:EventEmitter<String>=new EventEmitter();


  sendMessage(){
    this.emitMessage.emit(this.childMessage);
  }
  
}
