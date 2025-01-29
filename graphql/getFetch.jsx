import createApolloClient from "../lib/apollo-client";
export async function getFetch(graphqlQuery, { variables } = {}) {
  const client = createApolloClient();

  const { data, errors } = await client.query({
    query: graphqlQuery,
    variables,
    fetchPolicy: "network-only", // Ensures fresh data
    context: {
      fetchOptions: {
        next: { revalidate: 10 }, // ✅ Revalidates data every 10 seconds
      },
    },
  });

  if (errors) {
    console.error("GraphQL Errors:", errors);
    return { error: errors };
  }

  return data;
}
