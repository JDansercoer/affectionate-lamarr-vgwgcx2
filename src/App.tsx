import "./styles.css";
import { RenderFilm } from "./renderQuery";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dev-541cf5be7e39601f.api.footium.club/api/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <RenderFilm />
      </div>
    </ApolloProvider>
  );
}
