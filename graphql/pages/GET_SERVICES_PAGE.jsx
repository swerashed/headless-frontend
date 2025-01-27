import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchServicesPage() {
  const GET_SERVICES_PAGE = gql`
    {
      page(id: "our-services", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  
  return getFetch(GET_SERVICES_PAGE);
}
