import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { TestComponentComponent } from './Components/test-component/test-component.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  // {path:':id',component:ProductDetailComponent},
  {path:'test',component:TestComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
