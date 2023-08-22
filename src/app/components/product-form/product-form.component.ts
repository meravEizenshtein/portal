import { Attribute, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { Attributes } from 'src/app/models/attributes';


@Component({
  selector: 'app-product-form',
  templateUrl:'./product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  
  product: Product =new Product()
  categories: string[] |undefined;
  categoriesSubscription: Subscription | undefined;
  category: string | undefined;
  attributesSubscription: Subscription | undefined;
  attributes: Attributes[] | undefined;
 
  ngOnInit(): void {
    this.categoriesSubscription = this.dataService
      .getAllCategories()
      .subscribe((response: Array<string>) => {
        this.categories = response;
      });
  }

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private dataService: DataService) {
  }

  saveProduct(){
    debugger;
    this.product.attributes= this.attributes!;
    this.dataService.saveNewProduct(this.product).subscribe();
  }

  getAttributesByCategory(category : string){
    this.product.category = category;
    this.attributesSubscription = this.dataService
      .getAttributesByCategory(category)
      .subscribe((response: Array<Attributes>) => {
        this.attributes = response;
        debugger
      });

  }


}
