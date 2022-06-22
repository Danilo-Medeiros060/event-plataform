import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oewera22ir01z77vm6fkek/master',
    cache: new InMemoryCache()
})