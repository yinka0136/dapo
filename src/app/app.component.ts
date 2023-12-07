import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showMinimized: boolean = false;
  public activeSection!: string;

  title = 'cargo';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        offset: 400,
        duration: 500,
        easing: 'ease-in-sine',
        delay: 100,
        once: true,
      });
    }
  }
  public showMinimizedMenu(value: any): void {
    this.showMinimized = value;
  }

  public setSection(fragment: string): void {
    this.activeSection = fragment;
  }
}
