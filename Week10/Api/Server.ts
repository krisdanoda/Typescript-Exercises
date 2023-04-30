import app from "./App";
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
dotenv.config({path: './config.env'});
import typeDefs from "./graphql/schema";
import Query from "./graphql/Query"

const DB = process.env.DATABASE_DEV!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!,
);

const server = new ApolloServer({
    typeDefs,
    resolvers: {Query}
})

export const serverStart = async (server: ApolloServer) => {
    await server.start()
    server.applyMiddleware({ app })
}

serverStart(server)


const port = process.env.PORT;
mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}`);
});