import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicepagePageRoutingModule } from './servicepage-routing.module';
import { ChartModule } from 'angular2-chartjs';
import { MyHeaderComponent } from './../my-header/my-header.component';
import { ServicepagePage } from './servicepage.page';
import { ExploreContainerComponent } from './../explore-container/explore-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicepagePageRoutingModule,
    ChartModule
  ],
  declarations: [ServicepagePage, MyHeaderComponent,ExploreContainerComponent]
})
export class ServicepagePageModule {}
