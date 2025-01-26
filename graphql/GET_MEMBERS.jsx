import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`query getAboutMembers($ids: [ID!]) {
  members {
    nodes {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      title
      position
    }
  }
}
`;

export async function fetchSelectedMembers(selectedMembersIds = []) {
  return getFetch(Query, {
    variables: {
      ids: selectedMembersIds,
    },
  });
}
