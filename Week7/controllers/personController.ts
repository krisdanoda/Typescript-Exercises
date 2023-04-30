import express = require('express');
import logger from '../utility/logger';
import { personType } from '../Person';
import { Request, Response } from 'express';
import Person from '../models/personModel';

const fs = require('fs');


var data = fs.readFileSync('people.json');
var myObjects = JSON.parse(data);



export const getAllThePersons = async (req: express.Request, res: express.Response) => {
  console.log('Getting all the persons');
  const data = await Person.find();
  try {
    const json = req.body;
    res.status(200)
      .json({
        status: 'success',
        data: data,
      });
  } catch (err) {
    res.status(400)
      .json({
        status: 'error',
        message: 'Something went wrong',
      });
  }
};

export const getAllPeople = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    res.status(200).json({
      status: 'success',
      results: data.length,
      data: {
        data
      },
    });
    logger.info('Data succesfully retrieved');
  } catch {
    logger.error('Something went wrong. Can\'t generate list of cars');
  }
};


export const postPersons = async (req: express.Request, res: express.Response) => {
  try {
    const data = await Person.create(req.body);
    res.status(201)
      .json({
        status: 'success',
        data: data,
      });

  } catch (err) {
    res.status(400)
      .json({
        status: 'error',
        message: 'Something went wrong',
      });
  }
};

export const createPerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const data= await Person.create(req.body);
    res.status(201).json({
      status: 'success',
      data: data,
    });
    logger.info('You created a new person');
  } catch {
    logger.debug('Something went wrong, could not create a new person');

  }
};


export const getPerson = async (req: Request, res: Response) => {
  const id = await Number(req.params.id);
  console.log('Getting single person');
  console.log(id);
  try {
    const person = await Person.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: person,
    });
    logger.info('Here is the person you requested');
    console.log(person);
  } catch {
    logger.debug('Something went wrong, could not get specific person');
  }
};

export const updatePerson = async (
  req: Request, res: Response,
) => {

  const id = await Number(req.params.id);
  console.log('person update');
  console.log("id:" + id);

  try {
    const index = myObjects.person.findIndex((person: personType) => person.id === id);
    console.log("index:" + index);
    let update = JSON.parse(JSON.stringify(req.body));
    myObjects.person[index] = update;
    console.log(myObjects.person[index]);
    const updatedContent = JSON.stringify(myObjects);
    fs.writeFileSync('people.json', updatedContent);

    res.status(200).json({
      status: 'success',
      data: req.body,
    });
    logger.info('You successfully updated the requested person');
  } catch {
    logger.debug('Something went wrong, could not update the requested person');
  }
};

export const deletePerson = async (
  req: Request, res: Response,
) => {
  const id = await Number(req.params.id);
  console.log('delete person');
  console.log(id);
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null,
    });
    logger.info('You deleted the requested person');
  } catch {
    logger.debug('Something went wrong, could not delete requested person');
  }
};


