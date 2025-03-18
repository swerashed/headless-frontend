import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

const GET_THEME_OPTIONS = gql`
  query ThemeOptions {
  crbThemeOptions {
    displayPopup
    title
    url
  }
}
`;

export async function getThemeOptions() {
  const client = createApolloClient();
  const data = await client.query({
    query: GET_THEME_OPTIONS,
    context: {
      fetchOptions: {
        next: {
          tags: ['cms'],
          revalidate: 10,
        },
      },
    },
  });

  return data.data.crbThemeOptions;
}
