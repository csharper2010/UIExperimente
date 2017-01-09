import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pzn'})
export class PznPipe implements PipeTransform {
    transform(value: number): string {
        let num = value.toFixed(0);
        return "00000000".substring(0, 8 - num.length).concat(num);
    }
}