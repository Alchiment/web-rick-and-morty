import {ApolloClient, ApolloLink, createHttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {systemVars} from "../../modules/common/constants/system-vars.constant.ts";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});
const httpLink = createHttpLink({ uri: systemVars.API_GRAPHQL });

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, httpLink]),
});

export default apolloClient;