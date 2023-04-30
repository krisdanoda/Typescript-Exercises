import app from './app';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import express from 'express';
export const port = process.env.PORT;


dotenv.config({ path: './config.env' });

//const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// Note you must call `server.start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
//highlight-start
app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(server));
//highlight-end


app.listen(port, () => {
  console.log(DB);
  console.log(`App running on port ${port}`);
});

const DB = process.env.DATABASE_DEV!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!,
);

mongoose.connect(DB, {}).then(() => console.log('DB connection succesfull!'));