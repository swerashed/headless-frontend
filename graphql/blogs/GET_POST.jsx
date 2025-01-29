import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

// Get post by id, id type is database id
const GET_POST = gql`
  query ($slug: String!) {
  posts(where: {name: $slug}) {
    nodes {
      id
      title
      slug
      excerpt
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}

`;


export async function getPost(slug) {
  const client = createApolloClient();
  const slugString = slug.toString()
  const data = await client.query({
    query: GET_POST,
    variables: { slug: slugString },
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
    post: {
      title: data?.data?.posts?.nodes[0]?.title ?? '',
      slug: data?.data?.posts?.nodes[0]?.slug ?? '',
      content: data?.data?.posts?.nodes[0]?.content ?? '',
      excerpt: data?.data?.posts?.nodes[0]?.excerpt ?? '',
      featuredImage: data?.data?.posts?.nodes[0]?.featuredImage?.node?.sourceUrl ?? '',
      categories: data?.data?.posts?.nodes[0]?.categories.nodes ?? [],
      date: data?.data?.posts?.nodes[0]?.date ?? [],
    },
    loading: data.loading,
    error: data.error,
  };
}
