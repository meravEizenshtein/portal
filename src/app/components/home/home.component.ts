import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  
  cols=3;
  rowHeight=335;
  products: Array<Product> | undefined;
  category = 'all'; 
  sort = 'desc';
  productsSubscription: Subscription | undefined;

  constructor(
    private apiService: ApiService
  ) {}

  
  ngOnInit(): void {
    this.getProductsByCategory();
  }
  
  getProductsByCategory() {
    if (this.category =='all'){
      this.productsSubscription = this.apiService
    .getAllProducts()
    .subscribe((response: Array<Product>) => {
      this.products = response;
    });
    }else{
    this.productsSubscription = this.apiService
    .getProductsByCategory(this.category)
    .subscribe((response: Array<Product>) => {
      this.products = response;
    });
  }
}


  onShowCategory (newCategory : string) :void{
    this.category= newCategory;
    this.getProductsByCategory();
  }

  onDeleteProduct(id : string) :void{
    this.deleteProduct(id);
  }
  
  deleteProduct(id : string) {
    this.apiService.deleteProduct(id)
    .subscribe((data)=>{
      console.log(data);
          this.getProductsByCategory();
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

}
