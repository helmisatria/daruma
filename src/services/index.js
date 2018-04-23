/**
 * Beasiswa Kita API service
 */

import { create } from 'apisauce';

import { RoomClass } from './RoomClass';
import { Patient } from './Patient';
import { Booking } from './Booking';
import { Hospital } from './Hospital';

const baseURL = 'http://basisdatalab.com:8000/';

export const apiCreate = () => {
  const api = create({
    baseURL,
    headers: {}
  });

  return {
 		RoomClass: RoomClass(api),
 		Patient: Patient(api),
 		Booking: Booking(api),
 		Hospital: Hospital(api),
  };
};

// src/services/index.js

