import mongoose from 'mongoose';
import slugify from 'slugify';

const mechanicSchema = new mongoose.Schema({

    firstname: {
      type: String,
      trim: true,
      required: [true, 'Please enter your first name'],
    },

    lastname: {
      type: String,
      trim: true,
      required: [true, 'Please enter your last name'],
    },

    email: {
      type: String,
      validate: {
        validator: function(email: string) {
          return /[a-z0-9+@+\.[a-z]/.test(email);
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
        },
        message: (props: { value: any; }) => `${props.value} is not a valid email!`,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true,
      },
    },

    role: {
      type: String,
      enum: ['mechanic', 'admin'],
      default: 'mechanic',
    },
    password: {
      type: String,
      required: [true, 'Please enter your password'],
      minlength: [8, 'Password must be at least 8 characters long'],
      select: false,

    },

    createdA: {
      type: Date,
      default: Date.now(),
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'Review must belong to a car.'],
    },

    slug: String,

  },
);


const Mechanic = mongoose.model('Mechanic', mechanicSchema);
