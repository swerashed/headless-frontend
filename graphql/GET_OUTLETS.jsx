import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`
  query OutletQuery {
  outlets {
    edges {
      node {
        id
        mapLink
        outletId
        outletAddress
        district
        outletNumber
      }
    }
  }
}
`;

export async function fetchOutltes() {
  return getFetch(Query, {});
}
