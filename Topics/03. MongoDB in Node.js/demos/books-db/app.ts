import { Db } from "mongodb";
import { Author } from "./models/author.model";
import { Book } from "./models/book.model";

import { connectionString } from "./config/constants.config";
import { DbConfig } from "./config/db.config";

let db: Db;

DbConfig.init(connectionString)
    .then((dbInstance: Db) => {
        db = dbInstance;

        return db.collection("books")
            .insert(new Book(
                "The Fellowship of the Ring",
                "Elves, Dwarves, Hobbits, Rings, and stuff",
                new Author("J. R. R Tolkien"),
                ["Fantasy", "Adventure"]));
    })
    .then(() => {
        return db.collection("books")
            .find()
            .toArray();
    }).then((books: Book[]) => {
        books.forEach((book: Book) => console.log(book));
    });