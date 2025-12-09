import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientCountService {

  countPatients(patients: Patient[]): number {
    return patients.length;
  }
}
