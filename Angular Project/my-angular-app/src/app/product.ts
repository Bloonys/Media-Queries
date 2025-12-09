import { Injectable } from '@angular/core';
import { products, Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): Product[] {
    return products;
  }
}
