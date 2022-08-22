import {Category} from "./category";

export interface Product {
  id:number;
  category: Category;
  price:string;
  description:string
}
