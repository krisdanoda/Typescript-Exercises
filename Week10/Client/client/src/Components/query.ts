import { gql } from '@apollo/client';
export  const GET_PEOPLE = gql`
   
query GetPeople {
  people {
    _id
    name
    age
    address 
    {
      street
    }
  }
}
`;

export  const GET_ADDRESSES = gql`
    
query GetAddresses {
    addresses {
    _id
    street
  }
}
`;