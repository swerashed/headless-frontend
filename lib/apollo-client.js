import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SITES_API,
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),  // ✅ Add a cache
	defaultOptions: {
		query: {
		  fetchPolicy: 'no-cache',  // Ensures Apollo doesn’t cache query results
		  errorPolicy: 'all',
		},
		watchQuery: {
		  fetchPolicy: 'no-cache',  // Ensures Apollo doesn’t cache watch query results
		  errorPolicy: 'all',
		},
	  },
  });
};

export default createApolloClient;


// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
// import { onError } from '@apollo/client/link/error';

// const createApolloClient = () => {
// 	const httpLink = new HttpLink({
// 		uri: process.env.NEXT_PUBLIC_SITES_API,
// 	});

// 	const errorLink = onError(({ graphQLErrors, networkError }) => {
// 		if (graphQLErrors) {
// 			graphQLErrors.map(({ message, locations, path }) => {
// 				console.log(
// 					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
// 				);
// 			});
// 		}

// 		if (networkError) {
// 			console.log(`[Network error]: ${networkError}`);
// 		}
// 	});

// 	return new ApolloClient({
// 		ssrMode: typeof window === 'undefined',
// 		link: errorLink.concat(httpLink),
// 		cache: new InMemoryCache(),
// 	});
// };

// export default createApolloClient;
