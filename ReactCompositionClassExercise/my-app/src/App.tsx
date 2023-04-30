import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Components/Table";
import Header from "./Components/Header";
const people = [
    {id:1, name: "Helle", age: 20 },
    {id:2, name: "Ib", age: 30 },
    {id:3, name: "Bodil", age: 40 },
    {id:4, name: "Yasmin", age: 32 },
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table >
            <Header names = {people[0]}></Header>

        </Table>

      </header>
    </div>
  );
}

export default App;
