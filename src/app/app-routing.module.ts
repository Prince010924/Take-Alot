import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductComponent } from './Pages/Product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'product/:productId', component: ProductComponent},
  { path: '**' , redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
