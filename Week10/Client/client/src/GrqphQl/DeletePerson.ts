import { gql } from '@apollo/client';

const DeletePerson = gql`
mutation DeletePerson($deletePersonId: ID) {
    deletePerson(id: $deletePersonId)
  }
  `
export default DeletePerson