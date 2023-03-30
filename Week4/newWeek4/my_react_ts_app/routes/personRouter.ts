import express = require('express');
import { createPerson, deleteCar, getAllCars, getCar, updateCar } from '../controllers/personController';

const carRouter = express.Router();

carRouter.route('/:id').get(getCar).delete(deleteCar).patch(updateCar)
//carRouter.route('/').get(getAllCars).post(createCar)
export default carRouter;


