import PersonModel from '../models/personModel';

export default {
    getPeople: async (parent: any, args: any, context: any, info: any) => {
        return await PersonModel.find();
    },
    getPerson: async (parent: any, args: any, context: any, info: any) => {
        return await PersonModel.findById(args.id);
    },
}