import createApolloClient from '../lib/apollo-client';

export async function getFetch(graphqlQuery, { variables } = {}) {
  const client = createApolloClient();
  const query = graphqlQuery;

  const { data, loading, error } = await client.query({
    query,
    variables,
    fetchPolicy: "network-only",
    context: {
      fetchOptions: {
        next: { revalidate: 10 },
      },
    },
  });

  return {
    ...(data ? data : {}),
    loading,
    error,
  };
}

