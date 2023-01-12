import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../types';

@Pipe({
  name: 'categoryFilter',
  pure : false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: product[], category : string): product[] {

    if(!category) {
      return value;
    }

    return  value = value.filter((element)=>{
      return element.category == category
    })
  }

}
