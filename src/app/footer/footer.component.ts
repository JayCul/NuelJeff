import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  whiteLogo: string = "../../assets/images/Nuel-logo-white.png"
  darkLogo: string = "../../assets/images/NuelJeff_Logo.png";
  
  fileLocation: string = "" ;
}
