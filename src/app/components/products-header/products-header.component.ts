import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit{

  sort = "desc"; 
  itemsShowCount = 10;

  constructor(private dataService: DataService,
    private _router: Router){}
  ngOnInit(): void {
    
  }

  onSortUpdated (newSort: string): void{
      this.sort = newSort;
  }

  onItemsCountUpdated (count: number): void{
    this.itemsShowCount = count;
}

openAddProductForm(){
  this.dataService.updateProduct(new Product);
  this._router.navigate(['add-product']);
}

}
