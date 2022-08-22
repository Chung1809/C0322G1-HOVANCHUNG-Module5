import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categoryList: Category[] = [];
  productForm: FormGroup
  constructor(private product:ProductService,
              private router:Router,
              private category:CategoryService) { }

  ngOnInit(): void {
    this.category.getAll().subscribe(next=>{
      return this.categoryList = next;
    })
    this.productForm = new FormGroup({
      id: new FormControl(),
      price: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
    })
  }



  submit() {
    const product = this.productForm.value;
    this.product.saveProduct(product).subscribe(()=>{
      this.productForm.reset()
      this.router.navigate(['/product'])
    })
  }
}
