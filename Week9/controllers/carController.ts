import express = require('express');
import logger from "../utility/logger";
import Car from '../models/carModel';
import { Request, Response } from 'express';

let data = [
  {
    'id': '1',
    'model': 'Audi',
    'year': 2010,
    'price': 10000,
    'color': 'red',
  },
  {
    'id': '2',
    'model': 'Volvo',
    'year': 2012,
    'price': 12000,
    'color': 'blue',
  },
  {
    'id': '3',
    'model': 'Saab',
    'year': 2001,
    'price': 5000,
    'color': 'green',
  },
  {
    'id': '4',
    'model': 'BMW',
    'year': 2015,
    'price': 15000,
    'color': 'black',
  },
  {
    'id': '5',
    'model': 'Mercedes',
    'year': 2017,
    'price': 20000,
    'color': 'red',
  },
];

export const getAllTheCars = (req: express.Request, res: express.Response) => {

  try {
    const json = req.body;
    res.status(200)
      .json({
        status: 'success',
        message: data,
      });
  } catch (err) {

    res.status(400)
      .json({
        status: 'error',
        message: 'Something went wrong',
      });
  }
};

export const getAllCars = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const data = await Car.find();
    res.status(200).json({
      status: 'success',
      results: data.length,
      data: {
        data,
      },
    });
    logger.info('Data succesfully retrieved');
  } catch {
    logger.error('Something went wrong. Can\'t generate list of cars');
  }
};


export const postCar = (req: express.Request, res: express.Response) => {
  try {
    const json = req.body;
    res.status(201)
      .json({
        status: 'success',
        message: req.body,
      });

    data.push(req.body);
  } catch (err) {

    res.status(400)
      .json({
        status: 'error',
        message: 'Something went wrong',
      });
  }
};

export const createCar = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        car: newCar,
      },
    });
    logger.info('You created a new car');
  } catch {
    logger.debug('Something went wrong, could not create a new car');
  }
};


export const getCar = async (req: Request, res: Response) => {
  console.log(req);
  try {
    console.log(req.query.id);
    const car = await Car.findById(req.query.id);
    res.status(200).json({
      status: 'success',
      data: car,
    });
    logger.info('Here is the car you requested');
  } catch {
    logger.debug('Something went wrong, could not get specific car');
  }
};

export const updateCar = async (
  req: Request, res: Response
) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: car,
    });
    logger.info('You successfully updated the requested car');
  } catch {
    logger.debug('Something went wrong, could not update the requested car');
  }
};

export const deleteCar = async (
  req: Request, res: Response
) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null,
    });
    logger.info('You deleted the requested car');
  } catch {
    logger.debug('Something went wrong, could not delete requested car');
  }
};


