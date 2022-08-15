import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
    
  {
    path: 'home',
    loadChildren: () => import('C:/Users/bromotdi/Lab1/src/app/home/home.module').then( m => m.HomePageModule)
  },

  { path: '',
    redirectTo: 'home',
     pathMatch: 'full'
  },
  
  {
  path: 'arraypage',
  loadChildren: () => import('C:/Users/bromotdi/Lab1/src/app/arraypage/arraypage.module').then( m => m.ArraypagePageModule)
  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
