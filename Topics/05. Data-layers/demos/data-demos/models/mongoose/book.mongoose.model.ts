import { Book } from "./../book.model";

import * as mongoose from "mongoose";

const schema = new mongoose.Schema({
    genres: [String],
    title: String
});

schema.statics.toBook = (model: mongoose.Document): Book => {
    return new Book(model.get("title"), model.get("genres"));
};
schema.statics.fromBook = (book: Book): mongoose.Document => {
    return new BookModel({
        genres: book.genres,
        title: book.title
    });
};

mongoose.model("Book", schema);
const BookModel = mongoose.model("Book");

const parseToBook = (doc: mongoose.Document): Book => {
    return new Book(doc.get("title"), doc.get("genres"));
};

export { BookModel };

