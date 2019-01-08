import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.status === args.flag) {
      console.log('value is false');
      
    }
    return true;
  }

}


// if( value.status=='true'){
//   args.flag= true;
// }
// else if(value.status =='false'){
//   args.flag = false;
//   console.log('value is false');
// }
// else{
//   args.flag = '';
// }

// return args.flag;
