import { Component } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public menuProperties: Array<Menu> = [{
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fa-solid fa-chart-simple',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fa-solid fa-chart-pie',
        url: '',
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fa-solid fa-chart-simple',
        url: 'statistiques',
      }]
  },
  {
    id: '2',
    titre: 'Articles',
    icon: 'fa-brands fa-product-hunt',
    url: '',
    sousMenu: [
      {
        id: '21',
        titre: 'Articles',
        icon: 'fa-brands fa-product-hunt',
        url: 'articles',
      },
      {
        id: '22',
        titre: 'Mouvements du stock',
        icon: 'fa-solid fa-up-down-left-right',
        url: 'mvtstk',
      }]
  },
  {
    id: '3',
    titre: 'Clients',
    icon: 'fa-solid fa-person-half-dress',
    url: '',
    sousMenu: [
      {
        id: '31',
        titre: 'Clients',
        icon: 'fa-solid fa-person-half-dress',
        url: '',
      },
      {
        id: '32',
        titre: 'Commandes client',
        icon: 'fa-solid fa-barcod',
        url: '',
      }]
  },
  {
    id: '4',
    titre: 'Fournisseurs',
    icon: 'fa-solid fa-truck-field-un',
    url: '',
    sousMenu: [
      {
        id: '41',
        titre: 'Fournisseurs',
        icon: 'fa-solid fa-truck-field-un',
        url: '',
      },
      {
        id: '42',
        titre: 'Commandes Fournisseur',
        icon: 'fa-solid fa-barcod',
        url: '',
      }]
  },
  {
    id: '5',
    titre: 'Parametrages',
    icon: 'fa-solid fa-gears',
    url: '',
    sousMenu: [
      {
        id: '51',
        titre: 'Categories',
        icon: 'fa-solid fa-ethernet',
        url: '',
      },
      {
        id: '52',
        titre: 'Utilisateurs',
        icon: 'fa-solid fa-gears',
        url: '',
      }]
  }]

  constructor(private router: Router){

  }

  navigate(url?: String): void{
    this.router.navigate([url]);
  }
}
