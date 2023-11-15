import { Component, Input } from '@angular/core';
import { Todo } from '../../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  template: `
    <ul>
      @for (todo of todos; track todo.id) {
        <li>
          <a>{{ todo.title }}</a>
        </li>
      } @empty {
        <li>Nothing to do!</li>
      }
    </ul>
  `,
  styles: ``
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];
}
