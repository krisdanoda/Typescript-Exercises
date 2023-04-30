import React from 'react'
import {useState} from "react"
import {CREATE_ADDRESS} from "../GrqphQl/CreateAddress";
import {  useMutation } from '@apollo/client';
import {GET_ADDRESSES} from "./query";


const CreateAddress = () => {
    const [address, setAddress] = useState({street: ""});

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_ADDRESS,{
        refetchQueries: [GET_ADDRESSES]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const createNewAddress = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { input: address }});
    }
    return (
        <div>
            <form onSubmit={createNewAddress}>
                <br/>
                <label>
                    <input type="text" name="street" placeholder='street address' value={address.street} onChange={(evt)=>{setAddress({...address, street:evt.target.value})}}/>
                </label>
                <br/>
                <input type="submit" value="Add new Address" />
            </form>
        </div>
    )
}

export default CreateAddress