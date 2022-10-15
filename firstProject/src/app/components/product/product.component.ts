import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1 = { productId: 1, productName: 'oda', productPrice: 100 };
  product2 = { productId: 2, productName: 'ütü', productPrice: 200 };
  product3 = { productId: 3, productName: 'masa', productPrice: 300 };
  product4 = { productId: 4, productName: 'pencere', productPrice: 400 };

  products = [this.product1, this.product2, this.product3, this.product4];
  constructor() {}

  ngOnInit(): void {}
}
