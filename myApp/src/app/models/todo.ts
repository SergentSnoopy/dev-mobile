export class Todo {

    id: string;
    Name: string;
    Description: string;
    isDone: boolean;

    constructor(n: string, d: string) {
        this.id = Math.floor(Math.random() * 10000000000).toString() + Date.now().toString();
        this.Name = n;
        this.Description = d;
        this.isDone = false;
    }
}
