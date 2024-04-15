import { Component, OnInit, booleanAttribute } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Collapse, CollapseInterface } from 'flowbite';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public ThemeSwitcherComponent: ThemeSwitcherComponent, public router: Router, public route: ActivatedRoute){}

  
// set the target element that will be collapsed or expanded (eg. navbar menu)
  whiteLogo: string = "../../assets/images/Nuel-logo-white.png"
  darkLogo: string = "../../assets/images/NuelJeff_Logo.png";
  home:boolean = true;
  sunLogo: string = "fa-regular fa-sun";
  moonLogo: string = "fa-regular fa-moon";
  icon: string = "";
  fileLocation: string = "" ;
  darkMode: boolean | any = false;

  toggleTheme(){
    this.ThemeSwitcherComponent.toggleTheme();
    this.toggleLogo();
  }

  routeToGallery(): void {
    this.router.navigate(['/gallery']);
    this.home = false;
  }
  
  routeToHome(): void {
    this.router.navigate(['/']);
    this.home = true;

  }

  toggleLogo(){
    this.darkMode = localStorage.getItem('isDarkMode');
    console.log("isDarkMode", this.darkMode);


    if (this.darkMode == "false"){
      this.fileLocation = this.darkLogo;
      this.icon = this.moonLogo;
      
    } else if (this.darkMode == "true"){
      this.icon = this.sunLogo;
      this.fileLocation = this.whiteLogo;
    }
  }

  ngOnInit(): void {
    this.toggleLogo();
  }
}
