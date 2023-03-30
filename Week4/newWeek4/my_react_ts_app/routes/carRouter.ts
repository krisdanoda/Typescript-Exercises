import express = require('express');
import { createCar, deleteCar, getAllCars, getCar, updateCar } from '../controllers/carController';

const carRouter = express.Router();

carRouter.route('/:id').get(getCar).delete(deleteCar).patch(updateCar)
//carRouter.route('/').get(getAllCars).post(createCar)
 export default carRouter;


