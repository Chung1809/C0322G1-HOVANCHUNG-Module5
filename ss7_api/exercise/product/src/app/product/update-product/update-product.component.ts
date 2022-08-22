import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId: number;
  productForm: FormGroup;
  categoryList:Category[] = [];
  constructor(private productService :ProductService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private category:CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      this.productId = +paramMap.get('id')
       this.getCategory(this.productId)
    })
  }

  ngOnInit(): void {
    this.category.getAll().subscribe(next=>{
      return this.categoryList = next;
    })
  }
  getCategory(id:number){
    return this.productService.findById(id).subscribe(p=>{
      return this.productForm = new FormGroup({
        id: new FormControl(p.id),
        category: new FormControl(p.category),
        price: new FormControl(p.price),
        description: new FormControl(p.description),
      })
    })
  }

  submit(productId: number) {
    const product = this.productForm.value;
    this.productService.updateCategory(productId,product).subscribe(next=>{
      this.router.navigate(['/product'])
    })
  }

  compareObj(value,option):boolean{
    return value.id === option.id;
  }
}
