import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeSwitcherComponent,
    HomepageComponent,
    GalleryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  exports: [GalleryComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
