import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Main',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Categorias',
      children: [
        {
          title: 'Crear Categoria',
          url: '/menu/ins-ctgry',
          icon: 'add-circle'
        },
        {
          title: 'Ver Categorias',
          url: '/menu/gets-ctgry',
          icon: 'albums'
        }
      ],
      open: false
    },
    {
      title: 'Comidas',
      children: [
        {
          title: 'Crear Comida',
          url: '/menu/ins-food',
          icon: 'add-circle'
        },
        {
          title: 'Ver Comidas',
          url: '/menu/gets-food',
          icon: 'logo-apple'
        }
      ],
      open: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
