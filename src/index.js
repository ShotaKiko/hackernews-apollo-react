import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/index.css"
import App from "./components/App"

//Apollo imports
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//Creates link that will connect to client to graphql api
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

//instantiaion of client passing in above connection
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

//Wrap app in HOC that expects client as a prop
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
