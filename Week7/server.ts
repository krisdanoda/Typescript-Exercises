import app from './app';
import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import mongoose from 'mongoose';

export const port = process.env.PORT;
app.listen(port, () => {
  console.log(DB);
  console.log(`App running on port ${port}`);
});

const DB = process.env.DATABASE_DEV!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!,
);

mongoose.connect(DB, {}).then(() => console.log('DB connection succesfull!'));