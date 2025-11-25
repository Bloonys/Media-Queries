import { Injectable } from '@angular/core';
import { DoctorCountService } from './doctor-count';
import { PatientCountService } from './patient-count';

@Injectable({
  providedIn: 'root',
})
export class TotalCountService {
  constructor(
    private doctorCountService: DoctorCountService,
    private patientCountService: PatientCountService
  ) {}

  calculateTotal(doctors: any[], patients: any[]): number {
    const doctorCount = this.doctorCountService.countDoctors(doctors);
    const patientCount = this.patientCountService.countPatients(patients);
    return doctorCount + patientCount;
  }
}
