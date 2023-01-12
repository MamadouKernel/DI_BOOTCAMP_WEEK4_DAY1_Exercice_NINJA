import { Pipe, PipeTransform } from '@angular/core';
import arraySort from 'array-sort';

@Pipe({
  name: 'categoryPipe',
  pure:false
})
export class CategoryPipePipe implements PipeTransform {

  constructor( ){}
  transform(collection: any[], property: string): any[] {
    let copy :any= []
    let temp

      for (let index = 0; index < collection.length; index++) {
            copy.push({name:collection[index].name,price:collection[index].price,category:collection[index].name.split(' ')[0]})
  
      }
      copy=arraySort(copy, 'category')
      return copy;
      
  }

}
