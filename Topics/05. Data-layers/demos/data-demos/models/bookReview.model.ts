import { Author } from "./author.model";

import { BaseModel } from "./base.model";
import { Book } from "./book.model";

export class BookReview extends BaseModel {
    public book: Book;
    public reviewText: string;
    public rating: number;
    public author: Author;
    constructor(
        book: Book,
        reviewText: string,
        rating: number,
        author: Author
    ) {
        super();
        this.book = book;
        this.reviewText = reviewText;
        this.rating = rating;
        this.author = author;
    }
}