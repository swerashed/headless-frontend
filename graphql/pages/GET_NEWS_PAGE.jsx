import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchNewsPage() {
  const GET_NEWS_PAGE = gql`
    {
      page(id: "news", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  
  return getFetch(GET_NEWS_PAGE);
}
