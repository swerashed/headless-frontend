import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`
 query GetResources {
  resources {
    nodes {
      id
      pdfFile
         title
      categories {
        edges {
          node {
            slug
          }
        }
      }
    }
  }
}
`;

export async function fetchResources() {
  return getFetch(Query, {});
}
