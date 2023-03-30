import {books, ratings} from "./data";

const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: (parent, {input}, context) => {
            const book = {
                id: books.length + 1,
                title: input.title,
                author: input.author,
                ratings: input.ratings
            }
            books.push(book);
            return book;
        },
        deleteBook: (parent, {id}, context) => {
            const book = books.find((book) => book.id == id);

            books.splice(books.indexOf(book), 1);
            //books = books.filter((book) => book.id != id)
            return book;
        },
        addRating: (parent, {id, rating}, context) => {

        }

    }
};

export default resolvers;