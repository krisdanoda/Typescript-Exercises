import React, {Dispatch, SetStateAction, useState} from 'react';
import {personType} from "./Person";
import apiFacade from "./apiFacade";


type Input2Props = {
    people: personType[];
    setPerson: Dispatch<SetStateAction<[personType]>>;
}


function Input2(props: Input2Props) {

    const [newPerson, setNewPerson] = useState<personType>();
    const [deleteID, setDeleteID] = useState<number>(0);

    const handleChange = (evt: { target: { id: string; value: string | number; }; }) => {
        setNewPerson({age: 0, city: "", id: 0, name: "", ...newPerson, [evt.target.id]: evt.target.value})
        console.log("posting person")
        console.log(newPerson)
    }

    const onChangeDelete = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setDeleteID(Number(evt.target.value))
    }


    const addPerson = () => {
        apiFacade.fetchData("POST", newPerson)
        console.log("posting person")
        console.log(newPerson)
    }

    const update = () => {
        apiFacade.fetchData("PUT", newPerson)
        console.log("putting person")
        console.log(newPerson)
    }

    const DELETE = () => {
        apiFacade.DELETE(deleteID)
    }


    return (
        <div>

            <input type="text" id="id" placeholder="id" onChange={handleChange}/>
            <input type="text" id = "name" placeholder={"name"} onChange={handleChange}/>
            <input type="number" id = "age" placeholder={"age"} onChange={handleChange}/>
            <input type="text" id = "city" placeholder={"city"} onChange={handleChange}/>

            <button onClick={addPerson}> ADD PERSON</button>
            <button onClick={update}> UPDATE PERSON</button>
            <br/>
            <input type="number" defaultValue={0} id = "delete" onChange={onChangeDelete}/>
            <button onClick={DELETE}> DELETE PERSON</button>
        </div>
    );
}

export default Input2;