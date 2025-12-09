import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorCountService {

  countDoctors(doctors: Doctor[]): number {
    return doctors.length;
  }
}
