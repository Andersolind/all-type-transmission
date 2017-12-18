import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  collapsed: boolean;
  constructor() {}

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngOnInit() {}
}
