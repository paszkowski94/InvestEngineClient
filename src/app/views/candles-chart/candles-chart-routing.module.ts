import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandlesChartComponent } from './candles-chart.component';

const routes: Routes = [
  {
    path: '',
    component: CandlesChartComponent,
    data: {
      title: 'CnadlesChart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandlesChartRoutingModule {}
