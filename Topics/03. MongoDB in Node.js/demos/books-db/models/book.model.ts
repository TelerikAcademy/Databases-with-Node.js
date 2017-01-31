import { Author } from "./author.model";
import { ModelBase } from "./base.model";

export class Book extends ModelBase {
    public title: string;
    public description: string;
    public genres: string[];
    public author: Author;

    constructor(title: string, description: string, author: Author, genres: string[]) {
        super();
        this.title = title;
        this.description = description;
        this.author = author;
        this.genres = genres;
    }
}