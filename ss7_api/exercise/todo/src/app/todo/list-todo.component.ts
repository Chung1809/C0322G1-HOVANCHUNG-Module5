import {Component, Injectable, OnInit} from '@angular/core';
import {Todo} from "../model/todo";
import {FormControl} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../enviroment/enviroment";
import {TodoService} from "../service/todo.service";
let _id = 1;
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();

  constructor(private http:HttpClient,
              private todoService:TodoService) {
  }

  ngOnInit() {
    this.getAll();
  }

  toggleTodo(todo) {
    todo.complete = !todo.complete;
    this.todoService.update(todo.id, todo).subscribe(r =>
      this.getAll());
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe( r => {
        this.getAll();
      });
      this.content.reset();
    }
  }
  delete(id: number) {
    this.todoService.delete(id).subscribe(r => {
      this.getAll();
    });
  }
  getAll() {
    this.todoService.getAll().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

}
