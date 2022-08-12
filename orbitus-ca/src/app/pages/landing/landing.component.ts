import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [],
})
export class LandingComponent implements OnInit {
  public isCollapsed = true;

  @ViewChild('card') card!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.card.nativeElement.contains(e.target)) {
        this.isCollapsed = !this.isCollapsed;
      }
    });
  }
}
