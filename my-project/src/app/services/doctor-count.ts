import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorCountService {
  countDoctors(doctors: any[]): number {
    return doctors.length;
  }
}
