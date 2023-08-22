import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html' 
})
export class ProductBoxComponent implements OnInit{
  @Input() public product: Product | undefined;
  @Input() public fullWidthMode = true; 
  @Output() public deleteProduct = new EventEmitter<string>();

  delete(): void{
    let id : string = this.product?.id!;
    this.deleteProduct.next(id);
  }

  edit(): void{

  }
  
  constructor(){}
  ngOnInit(): void {
  }

}
