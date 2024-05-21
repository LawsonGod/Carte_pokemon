import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true,

})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 200;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }
  @Input ('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
    console.log('Mouse enter');

  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
    console.log('Mouse leave');

  }
    
  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }

}
