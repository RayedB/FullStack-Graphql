import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';

import schema from './schema';
const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver')

const connection = mongoose.connection

connection.once('open',() => {
  console.log("connected to db")
})

app.use('/graphiql', graphiqlExpress({
  endpointURL:'/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.listen(8080, () => console.log("Running on 8080"))
