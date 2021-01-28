import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    getUsers {
      _id
      name
      email
      age
      address
      phone
    }
  }
`;
