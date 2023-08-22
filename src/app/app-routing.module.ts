import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent
}
,{
  path:'add-product',
  component: ProductEditorComponent
},
{ path: '**', redirectTo:'/' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
