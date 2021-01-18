import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    IonicModule,
      RouterModule.forChild([{ path: '', component: DashboardComponent }]),
      SharedModule
  ]
})
export class DashboardModule { }
