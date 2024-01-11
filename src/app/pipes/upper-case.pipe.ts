import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }
}
