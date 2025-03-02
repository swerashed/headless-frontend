import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`
  query getAboutMembers($ids: [ID!]) {
    members(where: { in: $ids }) {
      nodes {
        content
         databaseId
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
         categories {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
        position
      }
    }
  }
`;

export async function fetchSelectedMembers(selectedMembersIds = null) {
  return getFetch(Query, {
    variables: selectedMembersIds
      ? { ids: selectedMembersIds }
      : {}, 
  });
}
