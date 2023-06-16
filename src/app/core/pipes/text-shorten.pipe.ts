import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShorten',
})
export class TextShortenPipe implements PipeTransform {
  transform(text: string, len: number) {
    if (text.length <= len) return text;
    return text.slice(0, len) + ' ...';
  }
}
