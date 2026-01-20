import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'price-view',
  imports: [CurrencyPipe],
  templateUrl: './price-view.html',
  styleUrl: './price-view.css',
})
export class PriceView {

  price= 49.99
 
  
}
