import { Injectable } from '@angular/core';
import { DoctorCount } from './doctor-count';
import { PatientCount } from './patient-count';

@Injectable({
  providedIn: 'root',
})
export class TotalCount {
  constructor(
    private doctorCount: DoctorCount,
    private patientCount: PatientCount
  ) {}

  getTotal(doctors: any[], patients: any[]): number {
    const doctorCount = this.doctorCount.countDoctors(doctors);
    const patientCount = this.patientCount.countPatients(patients);
    return doctorCount + patientCount;
  }
}
