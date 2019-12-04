import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  transform(value: any, arg:string) {
    if (!value){
      return
    }
    if(!arg){
      return value;
    }
    arg = arg.toLowerCase();
    return value.filter((item)=>{
      return JSON.stringify(item).toLowerCase().includes(arg);
    })
  }
}