import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

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
    private dateService: DataService
  ) {}

  
  ngOnInit(): void {
    this.getProductsByCategory();
  }
  
  getProductsByCategory() {
    if (this.category =='all'){
      this.productsSubscription = this.dateService
    .getAllProducts()
    .subscribe((response: Array<Product>) => {
      this.products = response;
    });
    }else{
    this.productsSubscription = this.dateService
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
    this.getProductsByCategory();
  }
  
  deleteProduct(id : string) {
    this.dateService.deleteProduct(id)
    .subscribe();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

}
