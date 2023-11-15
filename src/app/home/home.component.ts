import { Component, inject } from '@angular/core';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoFormComponent } from "./ui/todo-form/todo-form.component";
import { TodoListComponent } from "./ui/todo-list/todo-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <h2>Todo</h2>
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)"/>
    <app-todo-list [todos]="todoService.todos()"/>
  `,
    styles: ``,
    imports: [TodoFormComponent, TodoListComponent]
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
