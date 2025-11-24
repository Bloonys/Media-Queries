import { Component } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { TotalCountService } from '../services/total-count.spec';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {

  hospitalDoctors: Doctor[] = [
    { name: "John", specialization: "Cardiology" },
    { name: "Mary", specialization: "Neurology" }
  ];

  hospitalPatients: Patient[] = [
    { name: "Bob", illness: "Flu" },
    { name: "Alice", illness: "Covid" },
    { name: "Tom", illness: "Broken Leg" }
  ];

  totalCount!: number;

  constructor(private totalService: TotalCountService) {}

  ngOnInit(): void {
    this.totalCount = this.totalService.getTotal(
      this.hospitalDoctors,
      this.hospitalPatients
    );
  }
}
