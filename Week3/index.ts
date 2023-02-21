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

let names: string[] = ["Mihosha", "Maho", "BzingerKing", "Wednesday", "Carole", "Garen", "Allah", "Vex", "Zoe", "Bob"]
let persons: Person[] = []


names.map((name) => {

    let gender: string
    if (getRandomInt(2) === 1)
        gender = "male"
    else gender = "female"


    persons.push(new Person(name, gender, getRandomInt(50)))
})
console.log(persons )

var sort: boolean = false
var asc: number = -1

function table(): string {
    //sort

    if (sort){
         persons.sort((a, b)=> {
             if (a.age <b.age){
                 return asc
             } else if (a.age > b.age){
                 return -asc
             } else {
                 return 0
             }
         })
    }

    var result: string = ""
    result += "<table>"
    persons.map((person) => {

            result += "<tr>"
            result += "<td>" + person.name + "</td>"
            result += "<td>" + person.age + "</td>"
            result += "<td>" + person.gender + "</td>"
            result += "</tr>"

        }
    )
    result += "</table>"
    console.log(result)
    document.getElementById("root")!.innerHTML = result;
    return result;
}

function sortTable(){
    sort = true;
    asc = -1*asc
    console.log("sorting")
    document.getElementById("root")!.innerHTML = table();
}

table()


