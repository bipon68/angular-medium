import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[image-directive]'
})

export class ImageDirective {


    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
      console.log('event: ', event)  
    }

}