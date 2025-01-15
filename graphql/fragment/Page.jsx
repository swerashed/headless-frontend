import { gql } from '@apollo/client';

// Define the GraphQL fragment
const Page = gql`
  fragment Page on Page {
    id
    title
  }
`;

export default Page;
