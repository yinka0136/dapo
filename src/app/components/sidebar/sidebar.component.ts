import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fragments } from '@shared/models/fragment.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public isOpen: boolean = false;
  public showMinimizedMenu: boolean = false;
  public fragments = Fragments;
  @Output() showMinimized = new EventEmitter();
  @Output() fragment: EventEmitter<string> = new EventEmitter<string>();
  public activeFragment: string = 'About';
  constructor(public route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: any) => {
      this.activeFragment = fragment;
      this.fragment.emit(fragment);
    });
  }

  ngOnInit(): void {}

  public toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    if (this.showMinimizedMenu) {
      this.showMinimized.emit(true);
    }
  }
  public minimizeMenu(): void {
    this.showMinimizedMenu = !this.showMinimizedMenu;
    this.showMinimized.emit(this.showMinimizedMenu);
  }

  public joinUs(): void {
    document.getElementById('joinUsModal')?.click();
    this.toggleSidebar();
  }
}
