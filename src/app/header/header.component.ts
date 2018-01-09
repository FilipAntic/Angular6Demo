import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'fa-home', routerLink: '/', routerLinkActiveOptions: { exact: true } },
      { label: 'Binding', icon: 'fa-plus', routerLink: '/binding' },
      { label: 'Directive', icon: 'fa-download', routerLink: '/directive' },
      { label: 'Primeng', icon: 'fa-refresh', routerLink: '/primeng' },
      { label: 'Login', icon: 'fa-login', routerLink: '/login' },
      { label: 'Register', icon: 'fa-register', routerLink: '/register' }
    ];
  }

}
