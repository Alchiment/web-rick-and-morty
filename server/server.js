import express from 'express';
import {readFile} from "node:fs/promises";
import {ApolloServer} from "@apollo/server";
import {resolvers} from "./resolvers.js";
import {expressMiddleware as apolloMiddleware} from "@apollo/server/express4";
import {systemVars} from "./constants/system-vars.constant.js";
import dbConn from './utils/db/database.js';
import dataRoutes from './routes/data.route.js';
import cors from 'cors';

const app = express();

app.use(cors(), express.json());

app.get('/api', (req, res) => {
    res.json('Welcome to Rick and Morty Laboratory API')
});

app.use('/api/data', dataRoutes);

const typeDefs = await readFile('./schema.graphql', 'utf8');

const apolloServer = new ApolloServer({typeDefs, resolvers});

await apolloServer.start();

app.use('/graphql', apolloMiddleware(apolloServer));

await dbConn.openConnection();

app.listen({port: systemVars.PORT}, () => {
    console.log(`Server running on ${systemVars.PORT}`);
    console.log(`Graphql server running on ${systemVars.PORT}/graphql`);
});
