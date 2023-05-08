import React, {createContext, useContext, useState} from 'react';
import {Person, Theme} from './types';
import {Button} from "@mui/material";

export const UserContext = createContext({ currentUser: {name: "", password: ""}, setCurrentUser: React.Dispatch<React.SetStateAction<{name: string, password: string}>> });


export default function UserContextProvider(props: { children: JSX.Element }) {
    const [currentUser, setCurrentUser] = useState({name: "", password: ""});


    return (
        <UserContext.Provider value={{
            currentUser,
            setCurrentUser
        }}>

            <div>
                <LoginButton/>
                {props.children}
            </div>

        </UserContext.Provider>
    )
}


function LoginButton() {

    const {
        currentUser, setCurrentUser
    } = useContext(UserContext);

    const [user, setUser] = useState({name: "", password: ""});

    if (currentUser.name !== "") {
        return <p>You logged in as {currentUser.name}.</p>;
    }

    return (<>

            <input type={"text"} onChange= {event => user.name = event.target.value}  placeholder={"user"}/>
            <input type={"text"} onChange={event => user.name = event.target.value} placeholder={"password"}/>

            <button onClick={() => {
                setCurrentUser(user)
                console.log(user)
            }} >login </button> </>
    );
}