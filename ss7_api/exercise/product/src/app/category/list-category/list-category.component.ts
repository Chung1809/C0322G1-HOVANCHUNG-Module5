import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categoryList:Category[] =[];
  constructor(private category:CategoryService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.category.getAll().subscribe(p=>{
      return this.categoryList = p;
    })
  }

}
