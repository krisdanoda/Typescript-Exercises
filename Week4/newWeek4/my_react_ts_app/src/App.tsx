import React, {useEffect, useState} from 'react'
import './App.css'
import {personType} from "./Person";
//import TableViewer from "./TableViewer";
import Input2 from "./Input";
import TableViewer from "./TableViewer";


function App() {
    const [people, setPeople] = useState<[personType]>([new personType(0, "",0,"")]);


    useEffect((): void => {
        // getPeople(setPeople)
        console.log("getting people")
        getPeople(setPeople)

    }, []);


    const getPeople = async (setPeople:  React.Dispatch<React.SetStateAction<[personType]>>) =>
    {
        const url = "http://localhost:3008/person";

        const data = await fetch(url);
        const result = await data.json();

        console.table(await result);
        setPeople(await result)
        await console.table(people)
        console.log("got people")

    }

    const getPeople2 = (setPeople:  React.Dispatch<React.SetStateAction<[personType] >>) =>
    {
        const url = "http://localhost:3008/person";
        fetch(url).then(res => {
            res.json().then(res =>
                setPeople(res)
            )
        })


    }

    return (
        <div className="App">

            <TableViewer people={people}></TableViewer>
            <Input2 people = {people} setPerson={setPeople}></Input2>
        </div>
    )
}



class Job {
    public name: string;
    private level: number;
    readonly isExpansion: boolean;

    constructor(name: string, level: number, isExpansion: boolean) {
        this.name = name;
        this.level = level;
        this.isExpansion = isExpansion;
    }
}

export default App;

