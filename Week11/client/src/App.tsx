import {useState, useEffect} from 'react'
import './App.css'
// https://www.apollographql.com/docs/react/get-started
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Person, Address} from './types';
import PersonTable from './components/PersonTable';
import PersonForm from './components/PersonForm';
import AddressForm from './components/AddressForm';
import MoveAddress from './components/MoveAddress';
import ThemeContextProvider from "./ThemeContext";
import UserContextProvider, {UserContext} from "./UserContext";

const client = new ApolloClient({
    uri: 'http://localhost:4003/graphql',
    cache: new InMemoryCache(),
});

const App = () => {
    const [person, setPerson] = useState<Person>({id: "0", name: "", age: 0})
    const [address, setAddress] = useState<Address>({street: "", city: "", country: "", zip: ""})
    const [showForm, setShowForm] = useState<String>('Person')

    return (
        <>
            <ApolloProvider client={client}>
                <UserContextProvider>


                <ThemeContextProvider>
                    <div className="flex justify-center">
                        <div className="w-1/2 flex justify-center bg-indigo-50">

                            <div className="bg-indigo-50">
                                <PersonTable setPerson={setPerson as (person: Person) => void}
                                             setShowForm={setShowForm}/>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center bg-sky-50">
                            <div className="bg-sky-50">
                                <div className="flex flex-col justify-center items-center">
                                    {showForm === 'Person' &&
                                        <PersonForm person={person} setPerson={setPerson as (person: Person) => void}/>}
                                    {showForm === 'Address' &&
                                        <AddressForm personId={person.id as String} address={address}
                                                     setAddress={setAddress}/>}
                                    {showForm === 'MoveAddress' && <MoveAddress/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </ThemeContextProvider>
                </UserContextProvider>
            </ApolloProvider>
        </>
    )
}

export default App
