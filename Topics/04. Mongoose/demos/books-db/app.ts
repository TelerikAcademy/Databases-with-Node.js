impoobjectrt { Mongoose } from 'mongoose';

import "./extensions/array.extensions";

import { DbConfig } from './config/db.config';
import { Book } from "./models/book.model";
import { connectionString } from "./config/constants.config";

let mongoose: Mongoose = null;

DbConfig.init(connectionString)
    .then((_mongoose) => {
        mongoose = _mongoose;
        let book = new Book({
            title: "The Way of Kings",
            author: { name: "Brandon Sanderson" },
            genres: ["Fantasy"],
            description: "Roshar is a world of stone swept by tempests that shape ecology and civilization. Animals and plants retract; cities are built in shelter. In centuries since ten orders of Knights fell, their Shardblade swords and Shardplate armor still transform men into near-invincible rriors. Wars are fought for them, and won by them."
        });

        return book.save();
    })
    .then((book: any) => {
        console.log("Book created!");
        return Book.find();
    })
    .then((books: any[]) => {
        books.forEach(book => console.log(book));
        books.find((book: any) => {
            console.log(book);
            return book;
        });
    });
