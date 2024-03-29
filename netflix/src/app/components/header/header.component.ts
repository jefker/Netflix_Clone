import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Português', icon: 'pi pi-refresh', routerLink: 'br'},
      {label: 'Ingles', icon: 'pi pi-refresh', routerLink: 'en'},
  ];
  }

}
