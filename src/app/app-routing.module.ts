import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { TestComponentComponent } from './Components/test-component/test-component.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'test',component:TestComponentComponent},
  {path:'product',component:ProductListComponent},
  {path:'productlist',component:ProductDetailComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
