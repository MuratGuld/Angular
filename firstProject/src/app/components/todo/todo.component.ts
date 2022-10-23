import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { HttpClient } from '@angular/common/http';
import { TodoResponseModel } from 'src/app/models/todoResponseModel';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  dataLoaded: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response;
      this.dataLoaded = true;
    });
  }
}
