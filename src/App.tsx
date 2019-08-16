import React from "react";
import { split } from "apollo-link";
import { ApolloClient } from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";

import { ApolloProvider } from "@apollo/react-hooks";

import introspectionResult from "../fragment-types.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
});
const cache = new InMemoryCache({ fragmentMatcher });

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_HTTP_URI as string
});
const wsLink = new WebSocketLink({
  uri: process.env.GRAPHQL_WS_URI as string,
  options: { reconnect: true }
});
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({ cache, link });

export const App = () => (
  <ApolloProvider client={client}>
    <p>Hello, World!</p>
  </ApolloProvider>
);
