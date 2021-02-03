export class Todo {

    Name: string;
    Description: string;
    isDone: boolean;

    constructor(n: string, d: string) {
        this.Name = n;
        this.Description = d;
        this.isDone = false;
    }
}
