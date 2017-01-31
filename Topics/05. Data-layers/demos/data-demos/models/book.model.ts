import { BaseModel } from "./base.model";
export class Book extends BaseModel {
    title: string;
    genres: string[];

    constructor(title: string, genres: string[]) {
        super();
        this.title = title;
        this.genres = genres;
    }
}