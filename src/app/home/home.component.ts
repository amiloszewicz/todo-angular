import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo';
import { TodoFormComponent } from "./ui/todo-form/todo-form.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <h2>Todo</h2>
    <app-todo-form (todoSubmitted)="createTodo($event)"/>
  `,
    styles: ``,
    imports: [TodoFormComponent]
})
export default class HomeComponent {
  createTodo(todo: Todo) {
    console.log(todo);
  }
}
