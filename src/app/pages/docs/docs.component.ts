import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/navitem';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  placeDetail = JSON.parse(`{"ok":true,"message":"Videojuegos encontrados","count":12,"videogames":[{"_id":"602a17cb2c0e845044f26282","title":"Donkey Kong Country","saga":"Donkey Kong Country","description":"Nintendo Snes","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/Donkey_Kong_Country1.png","createdAt":"2021-02-15T06:42:19.549Z","updatedAt":"2021-02-15T06:42:19.549Z"},{"///":"///"},{"_id":"602ad73379ee1263dcaeff02","title":"Donkey Kong Country 2 - Diddy's Kong Quest","saga":"Donkey Kong Country","description":"Nintendo Snes","image":"https:\/\/vgmsite.com\/soundtracks\/donkey-kong-country-02-diddys-kong-quest\/front.png","createdAt":"2021-02-15T20:18:59.455Z","updatedAt":"2021-02-15T20:18:59.455Z"}]}`);

  menu: NavItem [] = [
    {
      displayName: 'Escritorio',
      iconName: 'desktop_windows',
      route: 'escritorio',
    },        
    {
      displayName: 'Entradas GADE',
      iconName: 'ballot',
      route: 'entradasGADE',
    },
    {
      displayName: 'Expedientes',
      iconName: 'description',          
      children: [
        {
          displayName: 'Mis Expedientes',
          iconName: 'how_to_reg',
          route: '/misexpedientes'
        },
        { 
          displayName: 'Todos',
          iconName: 'waves',
          route: '/todos'
        }
      ]
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
          {
            displayName: 'Búsqueda Perfil',
            iconName: 'search',
            route: '/busquedaperfiles'
          }
        ]
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
