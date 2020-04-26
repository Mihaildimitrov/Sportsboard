export class Tournament {
    id: string;
    title: string;
    description: string;
    events: Array<object>;
    users: Array<string>

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}