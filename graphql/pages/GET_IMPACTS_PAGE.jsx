import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchImpactsPage() {
  const GET_IMPACTS_PAGE = gql`
    {
      page(id: "impacts", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  
  return getFetch(GET_IMPACTS_PAGE);
}
