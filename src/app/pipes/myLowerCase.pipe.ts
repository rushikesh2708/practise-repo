import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name: 'myLowerCase'
})

export class MyLowerCasePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
       const newValue = value.toLowerCase()
       return newValue;
    }
}