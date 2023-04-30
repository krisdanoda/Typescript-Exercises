import {gql} from '@apollo/client';

const CreatePerson = gql`
  mutation AddPerson($input: PersonInput!){
    addPerson(input: $input) {
        id
        name
        age
        addresses {
            id
            street
            city
        }
  }
}
`;
export default CreatePerson