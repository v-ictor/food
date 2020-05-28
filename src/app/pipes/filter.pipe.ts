import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods: any[], texto: string, colunma: string): any[] {

    if(texto.length === 0){ return foods }

    texto = texto.toLocaleLowerCase();

    // return foods.filter(foods => {
    //   return foods.title.toLocaleLowerCase().includes(texto);
    // });
    return foods.filter(foods => {
      return foods[colunma].toLocaleLowerCase().includes(texto);
    });

  }

}
