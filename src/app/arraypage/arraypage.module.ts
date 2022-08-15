import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArraypagePageRoutingModule } from './arraypage-routing.module';

import { ArraypagePage } from './arraypage.page';
import { MyHeaderComponent } from './../my-header/my-header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArraypagePageRoutingModule
  ],
  declarations: [ArraypagePage,MyHeaderComponent]
})
export class ArraypagePageModule {}
