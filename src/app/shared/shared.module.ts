import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule
  ]
})
export class SharedModule { }
