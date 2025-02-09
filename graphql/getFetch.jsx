import createApolloClient from '../lib/apollo-client';

export async function getFetch(graphqlQuery, { variables } = {}) {
  const client = createApolloClient();
  const query = graphqlQuery;

  const { data, loading, error } = await client.query({
    query,
    variables,
    context: {
      fetchPolicy: "network-only",
      fetchOptions: {
        next: {
          tags: ['cms'],
          revalidate: 10,
        },
      },
    },
  });

  return {
    ...(data ? data : {}),
    loading,
    error,
  };
}
