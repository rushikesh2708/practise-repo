import {Directive,Renderer2,ElementRef,HostListener} from '@angular/core'

@Directive({
    selector:'[appHoverEffect]'
})

export class HighlightThreeDirective{
    constructor(private ren:Renderer2, private el:ElementRef){

    }

    ngOnInit(){}

    @HostListener('mouseover')
    onMouseOver(){
        this.ren.addClass(this.el.nativeElement,'bg-primary')
        this.ren.addClass(this.el.nativeElement,'p-2')
    }
    @HostListener('mouseout')
    onMouseOut(){
        this.ren.setStyle(this.el.nativeElement,'background-color','')
        this.ren.removeClass(this.el.nativeElement,'bg-primary')
    }

}