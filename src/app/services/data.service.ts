import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
//for shring data between components
export class DataService {
  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();

  constructor() { }

  updateProduct(product: Product) {
    this.product$.next(product);
  }
}
