import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { HttpClient } from '@angular/common/http';
import { TodoResponseModel } from 'src/app/models/todoResponseModel';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.httpClient.get<Todo[]>(this.apiUrl).subscribe((response) => {
      this.todos = response;
    });
  }
}
