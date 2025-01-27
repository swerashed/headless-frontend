import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`
  query OutletQuery {
  outlets {
    edges {
      node {
        id
  
        outlets {
          map_link
          outlet_address
          outlet_name
          outlet_number
        }
        title
      }
    }
  }
}
`;

export async function fetchOutltes() {
  return getFetch(Query, {});
}
