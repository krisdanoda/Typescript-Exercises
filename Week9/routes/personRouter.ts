import express = require('express');
import {
  createPerson,
  getAllThePersons,
  getPerson,
  postPersons,
  deletePerson,
  updatePerson,
} from '../controllers/personController';
import { deleteCar } from '../controllers/carController';
const personRouter = express.Router();

personRouter.route('/:id').get(getPerson).delete(deletePerson).patch(updatePerson).put(updatePerson);
personRouter.route('/').get(getAllThePersons).post(createPerson);
export default personRouter;


