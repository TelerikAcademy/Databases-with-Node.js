import { ModelBuilder } from "./utils/schema.builder"
import { StringValidator } from './../validators/string.validator';

const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 40;

const MIN_DESCRIPTION_LENGTH = 0;
const MAX_DESCRIPTION_LENGTH = 40000000;

let Book = new ModelBuilder().build("Book", {
    title: {
        type: String,
        required: true,
        validate: StringValidator.getValidator(MIN_TITLE_LENGTH, MAX_TITLE_LENGTH)
    },
    description: {
        type: String,
        required: true,
        validate: StringValidator.getValidator(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH)
    },
    author: {
        type: {
            name: String
        },
        required: true
    },
    genres: {
        type: [String],
        required: true
    }
});

export { Book };
