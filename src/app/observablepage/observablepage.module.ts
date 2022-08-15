import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservablepagePageRoutingModule } from './observablepage-routing.module';

import { ObservablepagePage } from './observablepage.page';
import { MyHeaderComponent } from './../my-header/my-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservablepagePageRoutingModule
  ],
  declarations: [ObservablepagePage, MyHeaderComponent]
})
export class ObservablepagePageModule {}
