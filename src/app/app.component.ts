import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate =
[
 {
    title : 'Лабораторна робота Nº1',
    url: '/home',
    icon: 'home'
        },
    {
    title : 'Лабораторна робота Nº2',
    url: '/graph',
    icon: 'analytics'
    },
    {
      title : 'Лабораторна робота Nº3',
      url: '/file',
      icon: 'information-circle'
      },
    {
      title : 'Лабораторна робота Nº4',
        url: '/abstract-class',
        icon: 'home'
        },
    {
      title : 'Лабораторна робота Nº6',
      url: '/interfacepage',
      icon: 'information-circle'
     },
     {
      title : 'Лабораторна робота Nº7',
      url: '/servicepage',
      icon: 'analytics'
     },
     {
      title : 'Лабораторна робота Nº8',
        url: '/observablepage',
        icon: 'home'
        }
    ];
  }
}
