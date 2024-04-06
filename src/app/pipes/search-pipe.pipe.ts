import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: string[], ...args: any[]): any {
    let searchValue = args[0];
    if(!searchValue){
      return value
    }

    else {
      searchValue = searchValue.toLocaleLowercase()
      const filteredCities = value.filter((city:string)=> city.toLocaleLowerCase().includes(searchValue))
      return filteredCities
    }
  }

}
