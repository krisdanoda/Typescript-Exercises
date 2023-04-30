export class personType {
    id: number;
    name: string;
    age: number;

    city?: string;

    constructor(id: number, name: string, age: number, city: string) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

}
export type PersonInput = {
    id: string;
    name: string;
    age: number;
    address?: AddressInput;

};

export type AddressInput = {
    id: string;
    street: string;
    city: string;
    people: PersonInput[]
};

export type Args = {

    id: String;
    PersonInput: PersonInput;
    AddressInput: AddressInput;

    input: PersonInput|AddressInput
};