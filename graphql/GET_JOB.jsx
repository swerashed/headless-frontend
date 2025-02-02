import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

// GraphQL query to fetch a single job by slug
const GET_JOB = gql`
  query GetJobBySlug($slug: String!) {
    jobBy(slug: $slug) {
      id
      title
      content
      deadline
      department {
        label
        value
      }
      vacancies
      location {
        label
        value
      }
    }
  }
`;

export async function getJob(slug) {
  const client = createApolloClient();
  try {
    const { data, loading, error } = await client.query({
      query: GET_JOB,
      variables: { slug },
      context: {
        fetchOptions: {
          next: {
            tags: ['cms'],
            revalidate: 10,
          },
        },
      },
    });

    return {
      job: data?.jobBy ?? null,
      loading,
      error,
    };
  } catch (error) {
    console.error('Error fetching job:', error);
    return {
      job: null,
      loading: false,
      error,
    };
  }
}
