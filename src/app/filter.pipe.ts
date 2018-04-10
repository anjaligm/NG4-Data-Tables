import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any[], search:string): any {
    return students.filter(student => student.name.toLowerCase().indexOf(search) !== -1);
}

}
