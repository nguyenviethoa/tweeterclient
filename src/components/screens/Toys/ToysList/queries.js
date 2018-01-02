// import { gql } from 'react-apollo';
import gql from 'graphql-tag';

export const GetAllToysQuery = gql`
        query GetAllToysQuery {
            allToy { 
                id
                title 
                urlImage 
                toyType {
                    toyTypeName
                }
            }
        }
    `;


