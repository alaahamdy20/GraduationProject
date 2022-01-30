import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  add(quantity:any){
    quantity.value = +quantity.value + 1;

  }
  sub(quantity:any){
    if(quantity.value > 0)
    quantity.value = quantity.value - 1;
  }
}
