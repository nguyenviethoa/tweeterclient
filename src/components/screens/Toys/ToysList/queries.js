// import { gql } from 'react-apollo';
import gql from 'graphql-tag';

export const GetAllToysQuery = gql`
        query GetAllToysQuery {
           GetAllToys{
            toyKind{
              toyKindName
            }
            urlImage
            title
            description
            id
          }
        }
    `;

