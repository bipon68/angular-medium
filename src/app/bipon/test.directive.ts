import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[test-directive]'
})
export class TestDirective {

  constructor(private el: ElementRef) { }

  @Input () defaultColor: string;

  @Input('test-directive') hightlightColor: string;

  // @HostListener('window:keydown', ['$event'])handleKeyDown(event: KeyboardEvent){
  //     console.log('event: ', event);
  //     this.highlight(this.hightlightColor || this.defaultColor || 'cyan')
  //   }

  @HostListener('window:keydown', ['$event']) KeyboardEvent(event: any){
    console.log('event: ', event);
    this.highlight(this.hightlightColor || this.defaultColor || 'cyan');
    console.log('text: ', event.target.value)
  }
  @HostListener('blur') KeyboardEventLeve(){
    // alert('empty')
    this.highlight(null);
  }

  // @HostListener('mouseenter') onMouseEnter(){
  //   console.log('event: ', event);
  //   this.highlight(this.hightlightColor || this.defaultColor || 'cyan')
  // }
  // @HostListener('mouseleave') onMouseLeave(){
  //   this.highlight(null);
  // }

  public highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
