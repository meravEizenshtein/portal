import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
},{
  path:'',redirectTo:'home', pathMatch:'full'
},
{
  path:'add-product',
  component: ProductFormComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
