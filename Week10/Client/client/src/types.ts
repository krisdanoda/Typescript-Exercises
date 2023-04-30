type Person = {
    id: string;
    name: string;
    age: number;
    city: string;
    addresses: Address[];
};
type Address = {
    id: string;
    street: string;
    number: number;
    people: Person[]
}
export type { Person, Address };