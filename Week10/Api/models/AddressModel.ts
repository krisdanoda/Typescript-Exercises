import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({

  street: {
    type: String,
    required: [true, "Street name cannot be empty"],
    trim: true,
    maxLength: [40, "Invalid length"],
    minLength: [2, "Invalid length"],
  },
  city: {
    type: String,
    required: [true, "City cannot be empty"],
    trim: true,
    maxLength: [40, "Invalid length"],
    minLength: [2, "Invalid length"],
  },
})

const AddressModel = mongoose.model("Address", AddressSchema);

export default AddressModel;