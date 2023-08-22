import { HttpClient } from '@angular/common/http';
import { Attribute, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Attributes } from '../models/attributes';

const STORE_BASE_URL = 'http://localhost:8080/product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpClient:HttpClient) { }

  
  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>("/product/category");///TO DO
  }


  public getAllProducts() :Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("/product");
  }

  public getProductsByCategory(category : string) :Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("/productsByCategory?category="+category);
  }

  public saveNewProduct(product: Product){
    return this.httpClient.post<Product>("/product",product);
  }

  public editProduct (product: Product){
    return this.httpClient.put<Product>("/product",product);
  }

  public deleteProduct(id: string){
    return this.httpClient.delete<Product>("/product/"+id);
  }

  public getAttributesByCategory(category : string) :Observable<Array<Attributes>>{
    return this.httpClient.get<Array<Attributes>>("/product/category/"+category);
  }


}
