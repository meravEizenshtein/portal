import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html' 
})
export class ProductBoxComponent implements OnInit{
  @Input() public product: Product | undefined;
  @Input() public fullWidthMode = true; 
  @Output() public deleteProduct = new EventEmitter<string>();

  constructor(private dataService: DataService,
    private _router: Router){}
  
  ngOnInit(): void {}

  delete(): void{
    let id : string = this.product?.id!;
    this.deleteProduct.next(id);
  }

  edit(): void{
    this.dataService.updateProduct(this.product!);
    this._router.navigate(['add-product'])
  }
  

}
