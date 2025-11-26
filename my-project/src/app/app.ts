import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-project');
}
