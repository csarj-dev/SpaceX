import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/", // API de SpaceX
  cache: new InMemoryCache(),
});

export default client;
