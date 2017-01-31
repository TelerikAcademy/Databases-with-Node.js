import * as path from 'path';
const connectionString = "mongodb://localhost/booksDb";
const lowDbPath = path.join(__dirname, "../db/db.json");
export {
    connectionString,
    lowDbPath
};