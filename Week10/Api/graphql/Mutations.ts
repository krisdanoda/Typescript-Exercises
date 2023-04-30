import PersonModel from "../models/personModel";
import { PersonInput, AddressInput, Args } from "../utils/types";
import AddressModel from "../models/AddressModel";
import personModel from "../models/personModel";

export default {
    createPerson: async (_parent:never, { input }:Args) => {
        if('age' in input){
            const newPerson = new PersonModel({ name:input.name, age: input.age });
            await newPerson.save();
            return newPerson;
        }
    },
    createAddress: async (_parent:never, { input }:Args) => {
        if('street' in input){
            const newAddress = new AddressModel({ street:input.street, city: input.city });
            await newAddress.save();
            return newAddress;
        }
    },
    deletePerson: async (_parent:never, {id}:PersonInput) => {
        const result = await personModel.findByIdAndDelete(id);
        return result ? true : false;
    },
    updatePerson: async (_parent:never, { input }:Args) => {
        if('age' in input){
            const result = await personModel.findByIdAndUpdate(input.id, {name: input.name, age: input.age});
            return result;
        }
    },
    addAddress: async (_parent:never, { input }:Args) => {
        if('street' in input){
            const newAddress = new AddressModel({ street: input.street, city: input.city});
            await newAddress.save();
            return newAddress;
        }
    },


}