import { useQuery } from '@apollo/client';
import GetPeople from '../queries/GetPeople';
import { Person } from '../types';
import { useState } from 'react';
import AddPToAddress from './AddPToAddress';
import AddPerson from './AddPerson';
import AddAddress from './AddAddress';
import DeletePerson from '../mutations/DeletePerson';
import { useMutation } from '@apollo/client';
import RemovePersonFromAddress from '../mutations/RemovePersonFromAddress';
import GetAddresses from '../queries/GetAddresses';

function PeopleViewer() {
    const [showAddresses, setShowAddresses] = useState(false)
    const [personId, setPersonId] = useState('')
    const { loading, error, data } = useQuery(GetPeople);
    const [mutateFunction] = useMutation(DeletePerson, {
        refetchQueries: [GetPeople]
    })
    const [mutateFunction2] = useMutation(RemovePersonFromAddress, {
        refetchQueries:[GetAddresses]
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const people: Person[] = data.people

    const handleDelete = (person:Person) => {
        person.addresses?.map((address)=>{
            console.log(address)
            mutateFunction2({
                variables:{
                    removePersonFromAddressId: address.id,
                    input: person.id
                }
            })
        })
        mutateFunction({
            variables:{
                deletePersonId: person.id
            }
        })
    }

    return (
        <>
            {showAddresses ?
                <div>
                    <button onClick={() => { setShowAddresses(false) }}>Back</button>
                </div> : <></>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {showAddresses ? <AddPToAddress setShowAddresses={setShowAddresses} personId={personId} /> : <> {people.map((person) =>
                    <div style={{ padding: 30, margin: 5, border: 'solid', textAlign: 'center' }}>
                        <h3>{person.name}</h3>
                        <p>Age: {person.age}</p>
                        <p>City: {person.city}</p>
                        {person.addresses?.map((address) =>
                            <p>Street Address: {address.street} {address.number}</p>
                        )}
                        <button onClick={() => { setShowAddresses(!showAddresses); setPersonId(person.id) }}>Add Address</button>
                        <div style={{ margin: 10 }}>
                            <button style={{ backgroundColor: 'red', color: 'whitesmoke' }} onClick={()=>handleDelete(person)}>Delete Person</button>
                        </div>
                    </div>
                )}
                </>}
            </div>
            {showAddresses ? <></> : <>
                <AddPerson />
                <AddAddress /></>}
        </>
    )
}

export default PeopleViewer