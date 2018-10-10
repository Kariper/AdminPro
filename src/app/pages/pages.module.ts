import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IncrementProgressComponent } from '../components/increment-progress/increment-progress.component';
import { GraphicDonaComponent } from '../components/graphic-dona/graphic-dona.component';

@NgModule({
declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    IncrementProgressComponent,
    GraphicDonaComponent
],
exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent
],
imports: [
    SharedModule, PAGES_ROUTES, FormsModule, ChartsModule
]})

export class PagesModule {}
