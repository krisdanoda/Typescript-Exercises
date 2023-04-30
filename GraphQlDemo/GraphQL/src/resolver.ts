import {persons} from "./data";

const resolvers = {
    Query: {
        persons: () => persons,
    },
    Mutation: {


    }
};

export default resolvers;