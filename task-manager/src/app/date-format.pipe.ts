import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any): string {
    if (value instanceof Date) {
      const day = value.getDate();
      const month = value.getMonth() + 1;
      const year = value.getFullYear();

      return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    }

    return '';
  }
}
