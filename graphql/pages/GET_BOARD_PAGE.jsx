import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchBoardPage() {
  const GET_ABOUT = gql`
    {
      page(id: "board-of-director", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  
  return getFetch(GET_ABOUT);
}
