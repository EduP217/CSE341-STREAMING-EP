const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const Streaming = require("../models/streamings");
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const graphQLschema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = graphqlHTTP({
    schema: graphQLschema,
    context: {
        Streaming
    },
    graphiql: true,
})