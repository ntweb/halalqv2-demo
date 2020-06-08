import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  model = {
    name: '',
    name_1: '',
    name_2: '',
    brand: '',
    category: '',
    produttore: {
      name: '',
      indirizzo: ''
    },
    fornitore: {
      name: '',
      indirizzo: ''
    }
  };

  categories = [
    {id: 1, name: 'Agricoltura 1 (Animali)'},
    {id: 2, name: 'Agricoltura 2 (Piante)'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
