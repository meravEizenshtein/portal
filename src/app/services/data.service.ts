import { HttpClient } from '@angular/common/http';
import { Attribute, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Attributes } from '../models/attributes';

const STORE_BASE_URL = 'http://localhost:8080/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient:HttpClient) { }

  
  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>("http://localhost:8080/product/category");///TO DO
  }


  public getAllProducts() :Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("http://localhost:8080/product");
  }

  public getProductsByCategory(category : string) :Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("http://localhost:8080/productsByCategory?category="+category);
  }

  public saveNewProduct(product: Product){
    return this.httpClient.post<Product>("http://localhost:8080/product",product);
  }

  public deleteProduct(id: string){
    return this.httpClient.delete<Product>("http://localhost:8080/product/"+id);
  }

  public getAttributesByCategory(category : string) :Observable<Array<Attributes>>{
    return this.httpClient.get<Array<Attributes>>("http://localhost:8080/product/category/"+category);
  }


}
