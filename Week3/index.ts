const helloWorld = (name: string) => {

    return "Konnichiwa " + name;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

class Person {
    name: string;
    age: number;
    gender: string;

    public constructor(name: string, gender: string, age: number) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
}

let names: string[] = ["Miho", "Maho", "BzingerKing", "Wednesday", "Carole", "Garen", "Allah", "Vex", "Zoe", "Bob"]
let persons: Person[] = []


names.map((name) => {

    let gender: string
    if (getRandomInt(1) == 1)
        gender = "male"
    else gender = "female"


    persons.push(new Person(name, gender, getRandomInt(50)))
})
console.log(persons)


function table(): string {
    var result: string = ""

    persons.map( (person) => {

        result += "<tr>"
        result += "<td>" + person.name + "</td>"
        result += "</tr>"

    })

    return result;
}


document.getElementById("root")!.innerHTML = table();

