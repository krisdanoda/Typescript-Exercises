const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String
    author: String
  }

    type Rating {
    id: ID!
    value: Int!
    title: String!
    description: String!
    book: Book!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book!]!
  }
  
  type Mutation {
  addBook(input:BookInput): Book
  deleteBook(id:ID!): Book
  addRating(id:ID!, rating:Int!): Book
}

input BookInput {
    title: String
    author: String
    }
    
input RatingInput {
    value: Int!
    title: String!
    description: String!
    bookId: ID!
    }

`;

export default typeDefs;