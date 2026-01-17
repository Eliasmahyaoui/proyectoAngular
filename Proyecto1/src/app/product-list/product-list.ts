import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  title = "Mi lista de productos"
  headers = { image: 'ImageUrl',desc: 'Producto', price: 'Precio', avail: 'Disponible', marca: 'Marca', model:'model' };


  products: IProduct[] = [
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      marca: 'Macbook',
      model:'Air',
      price: 75,
      imageUrl: '/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      marca: 'Macbook',
      model:'Pro',
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4,
    },
  ];

}
