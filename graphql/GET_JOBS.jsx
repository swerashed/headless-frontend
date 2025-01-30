import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`
 query GetJobs {
  jobs {
    nodes {
      location {
        value
        label
      }
      slug
      uri
      vacancies
      department {
        label
        value
      }
      deadline
       title
    }
  }
}
`;

export async function fetchJobs() {
  return getFetch(Query, {});
}
