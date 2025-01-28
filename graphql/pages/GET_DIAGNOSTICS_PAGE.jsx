import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchDiagnosticsPage() {
  const GET_DIAGNOSTICS_PAGE = gql`
    {
      page(id: "diagnostics", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  
  return getFetch(GET_DIAGNOSTICS_PAGE);
}
