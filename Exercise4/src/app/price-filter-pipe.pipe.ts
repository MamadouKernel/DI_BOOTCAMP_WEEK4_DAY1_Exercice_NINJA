import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilterPipe',
  pure: false,
})
export class PriceFilterPipePipe implements PipeTransform {

  transform(values: Array<any>, min:number,max:number):any {
    if(min==null || max ==null){
        return values
    }else{
      return values.filter((value) => {
        return value.price>=min && value.price<=max
       });
    }
    
}

}
