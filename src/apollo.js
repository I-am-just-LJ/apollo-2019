import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://nomadcoders.co/graphql-for-beginners/lobby",
});

export default client;
