import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { HeaderinfoComponent } from './Components/headerinfo/headerinfo.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { RouterLink } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { FeaturesComponent } from './Components/features/features.component';
import { TestComponentComponent } from './Components/test-component/test-component.component';
import { SlidePhotoComponent } from './Components/slide-photo/slide-photo.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderinfoComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductListComponent,
    FeaturesComponent,
    TestComponentComponent,
    SlidePhotoComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
