import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'search-box',
  imports: [FormsModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
})
export class SearchBox {

  user=  {
    name:'',
    email:'',

  };

  buscador= "jordi masrset"
}
