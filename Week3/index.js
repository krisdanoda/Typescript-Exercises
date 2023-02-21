"use strict";
const helloWorld = (name) => {
    return "Konnichiwa " + name;
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
class Person {
    constructor(name, gender, age) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let names = ["Miho", "Maho", "BzingerKing", "Wednesday", "Carole", "Garen", "Allah", "Vex", "Zoe", "Bob"];
let persons = [];
names.map((name) => {
    let gender;
    if (getRandomInt(1) == 1)
        gender = "male";
    else
        gender = "female";
    persons.push(new Person(name, gender, getRandomInt(50)));
});
console.log(persons);
function table() {
    var result = "";
    persons.map((person) => {
        result += "<tr>";
        result += "<td>" + person.name + "</td>";
        result += "</tr>";
    });
    return result;
}
document.getElementById("root").innerHTML = table();
