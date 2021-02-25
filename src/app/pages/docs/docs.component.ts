import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/navitem';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  placeDetail = JSON.parse(`{"ok":true,"message":"Videojuegos encontrados","count":12,"videogames":[{"_id":"602a17cb2c0e845044f26282","title":"Donkey Kong Country","saga":"Donkey Kong Country","description":"Nintendo Snes","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/Donkey_Kong_Country1.png","createdAt":"2021-02-15T06:42:19.549Z","updatedAt":"2021-02-15T06:42:19.549Z"},{"_id":"602ad73379ee1263dcaeff02","title":"Donkey Kong Country 2 - Diddy's Kong Quest","saga":"Donkey Kong Country","description":"Nintendo Snes","image":"https:\/\/vgmsite.com\/soundtracks\/donkey-kong-country-02-diddys-kong-quest\/front.png","createdAt":"2021-02-15T20:18:59.455Z","updatedAt":"2021-02-15T20:18:59.455Z"},{"_id":"602ad73379ee1263dcaeff03","title":"Donkey Kong Country 3 - Dixie Kong's Double Trouble OST","saga":"Donkey Kong Country","description":"Nintendo Snes","image":"https:\/\/vgmsite.com\/soundtracks\/donkey-kong-country-3-dixie-kong-s-double-trouble-ost\/front.jpg","createdAt":"2021-02-15T20:18:59.916Z","updatedAt":"2021-02-15T20:18:59.916Z"},{"_id":"602a17822c0e845044f2627a","title":"Metal Slug 2","saga":"Metal Slug","description":"Composed by: HIYA!","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover2MetalSlug2.jpg","createdAt":"2021-02-15T06:41:07.220Z","updatedAt":"2021-02-15T06:41:07.220Z"},{"_id":"602a17c82c0e845044f2627c","title":"Metal Slug 3","saga":"Metal Slug","description":"Composed by: HIYA!, Captain Beroou, Hori_Hori, Q_JIROU, maitaro","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover3MetalSlug3.jpg","createdAt":"2021-02-15T06:42:16.433Z","updatedAt":"2021-02-15T06:42:16.433Z"},{"_id":"602a17ca2c0e845044f26281","title":"Metal Slug 3D","saga":"Metal Slug","description":"Composed by: Mitsuhiro Kaneda","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover3dMetalSlug3d.jpg","createdAt":"2021-02-15T06:42:18.935Z","updatedAt":"2021-02-15T06:42:18.935Z"},{"_id":"602a17c82c0e845044f2627d","title":"Metal Slug 4","saga":"Metal Slug","description":"Composed by: Toshikazu Tanaka","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover4MetalSlug4.jpg","createdAt":"2021-02-15T06:42:16.894Z","updatedAt":"2021-02-15T06:42:16.894Z"},{"_id":"602a17c92c0e845044f2627e","title":"Metal Slug 5","saga":"Metal Slug","description":"Composed by: Toshikazu Tanaka","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover5MetalSlug5.jpg","createdAt":"2021-02-15T06:42:17.349Z","updatedAt":"2021-02-15T06:42:17.349Z"},{"_id":"602a17c92c0e845044f2627f","title":"Metal Slug 6","saga":"Metal Slug","description":"Composed by: Manabu Namiki, Mitsuhiro Kaneda","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover6MetalSlug6.jpg","createdAt":"2021-02-15T06:42:17.815Z","updatedAt":"2021-02-15T06:42:17.815Z"},{"_id":"602a17ca2c0e845044f26280","title":"Metal Slug 7","saga":"Metal Slug","description":"Composed by: Toshikazu Tanaka","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover7MetalSlug7.jpg","createdAt":"2021-02-15T06:42:18.385Z","updatedAt":"2021-02-15T06:42:18.385Z"},{"_id":"602a17c72c0e845044f2627b","title":"Metal Slug X","saga":"Metal Slug","description":"Composed by: HIYA!, Captain Beroou","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover3MetalSlug3.jpg","createdAt":"2021-02-15T06:42:15.976Z","updatedAt":"2021-02-15T06:42:15.976Z"},{"_id":"6029f78685eba90d8c3bac75","title":"Metal Slug: Super Vehicle-001","saga":"Metal Slug","description":"Composed by: HIYA!, JIM","image":"https:\/\/raw.githubusercontent.com\/chelosky\/ost-videogames-covers\/main\/covers\/cover1MetalSlug.jpg","createdAt":"2021-02-15T04:24:38.514Z","updatedAt":"2021-02-15T04:24:38.514Z"}]}`);

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
