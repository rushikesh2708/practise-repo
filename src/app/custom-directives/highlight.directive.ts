import {Directive, Renderer2,ElementRef} from '@angular/core'

@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective{
    constructor(private ren:Renderer2,private el:ElementRef){

    }

    ngOnInit(){
        this.ren.addClass(this.el.nativeElement,'bg-primary')
    }
}