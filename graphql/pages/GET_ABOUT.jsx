import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchAbout() {
  const GET_ABOUT = gql`
    {
      page(id: "about-us", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  
  return getFetch(GET_ABOUT);
}
