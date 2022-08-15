import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilePageRoutingModule } from './file-routing.module';

import { FilePage } from './file.page';
import { MyHeaderComponent } from './../my-header/my-header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilePageRoutingModule
  ],
  declarations: [FilePage,MyHeaderComponent]
})
export class FilePageModule {}
