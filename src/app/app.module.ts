import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { HeaderinfoComponent } from './Components/headerinfo/headerinfo.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderinfoComponent,
    FooterComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
