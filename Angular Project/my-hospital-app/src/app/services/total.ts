import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { DoctorCountService } from './doctor-count';
import { PatientCountService } from './patient-count';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor(
    private doctorService: DoctorCountService,
    private patientService: PatientCountService
  ) {}

  getTotalCount(doctors: Doctor[], patients: Patient[]): number {
    const doctorCount = this.doctorService.countDoctors(doctors);
    const patientCount = this.patientService.countPatients(patients);
    return doctorCount + patientCount;
  }
}
