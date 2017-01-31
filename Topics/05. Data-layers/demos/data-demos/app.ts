import { DbConfig } from "./config/db.config";
import { IData } from "./data/base.data";
import { Author } from "./models/author.model";
import { Book } from "./models/book.model";
import { BookReview } from "./models/bookReview.model";
import { Log } from "./models/log.model";
import { IProvider } from "./providers/base.provider";
import { MongoDbDataProvider } from "./providers/mongodb.data.provider";

let provider: IProvider;

DbConfig.initLocalDb()
    .then((provider: IProvider) => {
        const data = provider.provide<Book>("books");
        data.add(new Book("The Way of the King", ["Fantasy"]));
    });

DbConfig.initMongoose()
    .then((provider: IProvider) => {
        const booksData: IData<Book> =
            provider.provide<Book>("books");

        booksData.getAll()
            .then((books: Book[]) => {
                books.forEach((book: Book) => console.log(book));
            });
    });

DbConfig.initMongoDb()
    .then((provider: IProvider) => {
        let data = provider.provide("books");
        return data.getAll();
    }).then((books: Book[]) => {
        console.log("-------------------");
        console.log("With MongoDB Native");
        books
            .map((book: Book) => book.title)
            .forEach((title: string) => console.log(title));
        console.log("-------------------");
    });
