import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express'
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({}) )

app.listen(8080, () => console.log("Running on 8080"))
