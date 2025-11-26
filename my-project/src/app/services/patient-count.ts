import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientCountService {
  countPatients(patients: any[]): number {
    return patients.length;
  }
}

