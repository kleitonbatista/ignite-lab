import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4rrpruo1icq01wbg0skhuht/master",
  cache: new InMemoryCache(),
});
