import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMoive'
})
export class SearchMoivePipe implements PipeTransform {

  transform(allMoives:any , userWord:string): any {

   if(userWord==""){
     return allMoives;
   }else{
    return allMoives.filter((oneMovie: any) => oneMovie.title.includes(userWord));
   }
   
  }

}
