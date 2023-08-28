import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductBarChartsComponent } from './product-bar-charts/product-bar-charts.component';
import { ProductPieChartsComponent } from './product-pie-charts/product-pie-charts.component';
import { ProductAreaLineChartsComponent } from './product-area-line-charts/product-area-line-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductBarChartsComponent,
    ProductPieChartsComponent,
    ProductAreaLineChartsComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
