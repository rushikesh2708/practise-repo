import { Directive,Renderer2,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileNumberDirective]'
})
export class MobileNumberDirectiveDirective {

  constructor(private ren:Renderer2,private el:ElementRef) { }

  ngOnInit(){

  }

  @HostListener('input',['$event.target.value'])

  strictMobilenum(value:any){

    const newNum = value.replace(/[^0-9]*/g,'')
    this.ren.setProperty(this.el.nativeElement,'value',newNum)
  }

}
