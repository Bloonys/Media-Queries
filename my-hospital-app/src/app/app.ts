import { Component, signal } from '@angular/core';
import { HospitalComponent } from './hospital/hospital';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [HospitalComponent],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-hospital-app');
}
