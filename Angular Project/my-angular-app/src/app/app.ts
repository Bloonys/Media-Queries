import { Component, signal } from '@angular/core';
import { ProductService } from './product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  imports: [CommonModule],
  styleUrl: './app.css'
})

export class App {
  productList = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }
}