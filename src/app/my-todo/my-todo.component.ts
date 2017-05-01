import {Component, OnInit} from "@angular/core";
import {MyTodoService} from "./my-todo.service";

@Component({
    selector: 'app-my-todo',
    templateUrl: './my-todo.component.html',
    styleUrls: ['./my-todo.component.css'],
    providers: [MyTodoService]
})
export class MyTodoComponent implements OnInit {

    private todos;
    private activeTasks;

    constructor(private todoService: MyTodoService) {
    }

    getTodos(){
        return this.todoService.get().then(todos => {
            this.todos = todos;
            this.activeTasks = this.todos.filter(todo => todo.isDone).length;
        });
    }

    ngOnInit() {
        this.getTodos();
    }

}
