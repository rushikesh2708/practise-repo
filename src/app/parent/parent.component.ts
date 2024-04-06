import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message:string="";

  dataFromChild:string="";

  getData(e:any){
    this.dataFromChild = e;
  }
}
