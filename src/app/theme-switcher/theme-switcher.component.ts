import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  darkMode: boolean | any = false;

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('isDarkMode', this.darkMode ? 'true' : 'false');
    // Additional logic to apply the selected theme
    // This might involve updating CSS classes, theme variables, etc.
  }
  

  ngOnInit(): void {
    localStorage.setItem('isDarkMode', this.darkMode)
  }
}
