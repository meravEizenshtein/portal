import { Attribute, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { Attributes } from 'src/app/models/attributes';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  product: Product = new Product();
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;
  category: string | undefined;
  attributesSubscription: Subscription | undefined;
  attributes: Attributes[] | undefined;
  mode: string = 'create';

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private apiService: ApiService,
    private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.selectedProduct$.subscribe((value) => {
      if (value.id.length > 0){
        this.product = value;
        this.attributes = value.additionalAttributesList;
        this.mode = "update"
        this.getAttributesByCategory(this.product.category);

      }
    })

    this.categoriesSubscription = this.apiService
      .getAllCategories()
      .subscribe((response: Array<string>) => {
        this.categories = response;
      });
  }


  saveProduct() {
    this.product.additionalAttributesList = this.attributes!
    if (this.product.id.length > 0)
      this.apiService.editProduct(this.product).subscribe(res=>{
        this.dataService.updateProduct(new Product);
        this._router.navigate(['']);
      });
    else
      this.apiService.saveNewProduct(this.product).subscribe(res=>{
        this.dataService.updateProduct(new Product);
        this._router.navigate(['']);
      });
    
  }

  getAttributesByCategory(category: string) {
    this.product.category = category;
    this.attributesSubscription = this.apiService
      .getAttributesByCategory(category)
      .subscribe((response: Array<Attributes>) => {
        this.attributes = response;
      });

  }


}
