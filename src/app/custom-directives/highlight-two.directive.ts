import {Directive,ElementRef,Renderer2,Input} from '@angular/core'

@Directive({
    selector:'[appHighlightTwo]'
})


export class HighlightTwoDirective{

    @Input('appHighlightTwo') condition!:boolean
    constructor(private ren:Renderer2, private el:ElementRef){

    }

    ngOnInit(){

        if(this.condition){
this.ren.addClass(this.el.nativeElement,'bg-primary')
        }
        else{
            this.ren.addClass(this.el.nativeElement,'bg-secondary')
        }
    }
}