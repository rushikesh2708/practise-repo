
import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
    name:'lakhConverter'
})

export class LakhConverterPipe implements PipeTransform{

    transform(value:number, ...args:any[]){
     if(value){
 const lakh = 100000
 const formattedValue = (value/lakh).toFixed(2)
 return formattedValue + "Lakh"
     }
     else {
        return null
     }
    }
}