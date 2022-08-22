import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";

import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productList: Product[] =[];
  productId:number;
  nameProduct: string;
  constructor(private product:ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.product.getAll().subscribe(p=>{
      return this.productList = p;
  })
  }


  deleteProduct(temp: Product) {
    this.productId = temp.id;
    this.nameProduct = temp.category.name;
  }

  delete(productId: number) {
    this.product.deleteCategory(productId).subscribe((next)=>{
      return this.ngOnInit()
    })
  }
}
