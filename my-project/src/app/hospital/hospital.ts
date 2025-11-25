import { Component } from '@angular/core';
import { TotalCountService } from '../services/total-count';

interface Doctor {
  name: string;
  specialization: string;
}

interface Patient {
  name: string;
  illness: string;
}

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.html',
  styleUrls: ['./hospital.css'],
})

export class HospitalComponent {
  hospitalDoctors: Doctor[] = [
    { name: 'Dr. Alice', specialization: 'Cardiology' },
    { name: 'Dr. Bob', specialization: 'Neurology' },
    { name: 'Dr. Carol', specialization: 'Dermatology' },
  ];

  hospitalPatients: Patient[] = [
    { name: 'John', illness: 'Flu' },
    { name: 'Mary', illness: 'COVID' },
    { name: 'Tom', illness: 'Asthma' },
    { name: 'Lisa', illness: 'Broken Arm' },
  ];

  totalCount: number = 0;

  constructor(private totalService: TotalCountService) {
    this.totalCount = this.totalService.calculateTotal(
      this.hospitalDoctors,
      this.hospitalPatients
    );
  }
}
