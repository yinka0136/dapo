import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fragments } from '@shared/models/fragment.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() fragment: EventEmitter<string> = new EventEmitter<string>();
  public fragments = Fragments;
  public activeFragment: string = 'About';
  public isGettingJobCategories: boolean = false;

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: any) => {
      this.activeFragment = fragment;
      this.fragment.emit(fragment);
    });
  }
}
