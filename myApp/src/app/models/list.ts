import {Todo} from './todo';

export class List {

    id: string;
    Name: string;
    Todos: Todo[];
    owners: string[];

    constructor(n: string) {
        this.id = Math.floor(Math.random() * 10000000000).toString() + Date.now().toString();
        this.Name = n;
        this.Todos = [];
        this.owners = [];
    }
}
