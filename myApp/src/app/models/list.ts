import {Todo} from './todo';

export class List {

    Name: string;
    Todos: Todo[];


    constructor(n: string) {
        this.Name = n;
        this.Todos = [];
    }
}
