import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  // @Input() appHover: string = 'red'; Same Works but you have to change color to appHover below code
  @Input() color: string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'blue';
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'red';
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
}

// <------------- ElementRef and Renderer2 ------------->
// Yes, both ElementRef and Renderer2 can achieve the same result when it comes to manipulating DOM elements, but they aren't exactly the same:

// ElementRef: Directly accesses the DOM, which can potentially expose your app to security risks like XSS (Cross-Site Scripting) and is less platform-agnostic (e.g., not suitable for server-side rendering).

// Renderer2: A safer and more Angular-friendly way to manipulate the DOM, as it abstracts away the platform-specific details, ensuring better security and performance.

// In short, while they can perform similar tasks, Renderer2 is the recommended approach for DOM manipulation in Angular.
