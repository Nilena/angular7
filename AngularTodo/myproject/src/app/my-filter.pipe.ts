import { Pipe, PipeTransform } from '@angular/core';
import { splitClasses } from '@angular/compiler';

@Pipe({
  name: 'myFilter',
  pure:false
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any[], flag: any): any {
      // var arg1= args[0];
      console.log(value,flag);
      console.log(flag);
      if(flag==""){
        return value;
      } else if(flag === 'true'){
        return value.filter(todo => todo.status == true);
      } else{
        return value.filter(todo => todo.status == false);
      }
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
