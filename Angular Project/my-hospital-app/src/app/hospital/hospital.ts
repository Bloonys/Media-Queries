import { Component } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { Total } from '../services/total';

@Component({
  selector: 'app-hospital',
  standalone: true,
  templateUrl: './hospital.component.html',
  styleUrl: './hospital.component.css'
})
export class Hospital {

  // doctors array
  hospitalDoctors: Doctor[] = [
    { name: 'Dr. Wang', specialization: 'Cardiology' },
    { name: 'Dr. Smith', specialization: 'Neurology' }
  ];

  // patients array
  hospitalPatients: Patient[] = [
    { name: 'Alice', illness: 'Flu' },
    { name: 'John', illness: 'Infection' },
    { name: 'Mary', illness: 'Asthma' }
  ];

  totalCount = 0;

  constructor(private totalService: Total) {}

  ngOnInit() {
    this.totalCount = this.totalService.getTotalCount(
      this.hospitalDoctors,
      this.hospitalPatients
    );
  }
}
