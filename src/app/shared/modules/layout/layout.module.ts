import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NzLayoutModule,
    NzAffixModule,
    NzMenuModule
  ]
})
export class LayoutModule { }
