import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';
const Query = gql`
 query GET_SELECTED_BLOGS($ids: [ID!], $first: Int, $after: String, $excludeIds: [ID], $category: String) {
  posts(
    first: $first
    after: $after
    where: { 
      notIn: $excludeIds, 
      categoryName: $category, 
      in: $ids
    } 
  ) {
    nodes {
      uri
      title
      slug
      content
      date
      id
      databaseId
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
      categories {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;

export async function fetchSelectedBlogs(selectedBlogIds = [], after = null, postCount = 100, category = null) {
  return getFetch(Query, {
    variables: {
      ids: selectedBlogIds,
      first: postCount,
      after: after,
      category: category,
    },
  });
}
