import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchCareerPage() {
  const GET_CAREER_PAGE = gql`
    {
      page(id: "career", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  
  return getFetch(GET_CAREER_PAGE);
}
