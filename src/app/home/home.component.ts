import { Component, inject } from '@angular/core';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoFormComponent } from "./ui/todo-form/todo-form.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <h2>Todo</h2>
    <app-todo-form (todoSubmitted)="this.todoService.addTodo($event)"/>
  `,
    styles: ``,
    imports: [TodoFormComponent]
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
