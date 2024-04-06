import { Directive,Renderer2 ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective {

  constructor(private ren:Renderer2, private el:ElementRef) { }

  ngOnInit(){

  }

  @HostListener('input',["$event.target.value"])
  capitalize(value:any){
    const newValue = value.toLocaleUpperCase()
    this.ren.setProperty(this.el.nativeElement,'value',newValue)
  }
}
