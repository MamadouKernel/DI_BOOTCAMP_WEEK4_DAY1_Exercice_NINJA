import { Pipe, PipeTransform } from '@angular/core';
import arraySort from 'array-sort';
@Pipe({
  name: 'sortPipe',
  pure:false
})
export class SortPipePipe implements PipeTransform {

  transform(values: Array<any>,order:number):any {
    let copy
    if(order==1){
      copy = arraySort(values, 'category')
        return copy

    }else{
      copy = arraySort(values, 'category').reverse()
      return copy
    }
  }
}
