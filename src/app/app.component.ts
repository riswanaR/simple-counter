import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './counter.service';
import { PopupComponent } from './popup/popup.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PopupComponent, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showAbout = false;
  showWelcomeMessage = true;
  isDarkMode = false; 
  counterValue: number = 0;  

  ngOnInit(): void {
    setTimeout(() => {
      this.showWelcomeMessage = false;
    }, 3000);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  openInfo() {
    this.showAbout = true;
  }

  closeInfo() {
    this.showAbout = false;
  }

  refresh() {
    this.counterValue = 0;
  }

  incrementCounter() {
    this.counterService.increment();
    this.counterValue = this.counterService.getCounterValue();
  }

  decrementCounter() {
    this.counterService.decrement();
    this.counterValue = this.counterService.getCounterValue();
  }

  constructor(private counterService: CounterService) {
    this.counterValue = this.counterService.getCounterValue();
  }
}
