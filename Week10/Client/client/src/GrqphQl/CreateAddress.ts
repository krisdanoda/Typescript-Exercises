import {gql} from '@apollo/client';

export const CREATE_ADDRESS = gql`
  mutation AddAddress($input: AddressInput!){
    addAddress(input: $input) {
        id
        street
        city
  }
}
`;
