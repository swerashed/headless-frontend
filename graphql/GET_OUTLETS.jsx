import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`
  query OutletQuery($categoryName: String!) {
    outlets(where: { categoryName: $categoryName }, first: 100) {
      edges {
        node {
          id
          title
          outlets {
            map_link
            outlet_address
            outlet_name
            outlet_number
          }
        }
      }
    }
  }
`;

export async function fetchOutlets(categoryName) {
  if (!categoryName) {
    throw new Error("categoryName is required");
  }

  return getFetch(Query, { variables: { categoryName } });
}
