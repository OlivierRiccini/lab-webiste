import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlFormat'
})
export class UrlFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const formattedValue = value.toLocaleLowerCase().replace(/\s/g, '-');
    return formattedValue;
  }

}
