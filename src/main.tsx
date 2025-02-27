import {graphql} from 'graphql'
import ReactDOM from 'react-dom/client'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import App from './App.tsx'

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
