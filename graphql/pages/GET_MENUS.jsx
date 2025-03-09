import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';

export async function fetchMenus(NAME) {
	const Query = gql`
		query GET_MENU_BY_NAME {
			menu(id: "${NAME}", idType: NAME) {
				menuId
				name
				slug
				  menuItems(first: 100)  {
		nodes {
		  id
		  label
		  url
		  parentId 
		  childItems {
			edges {
			  node {
				id
				label
				url
			  }
			}
		  }
		}
	  }
			}
		}
	`;

	return getFetch(Query);
}
