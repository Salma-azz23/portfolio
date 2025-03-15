import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faCode, faLaptopCode, faMobileAlt, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { faAngular, faCss3Alt, faWhatsapp, faReact, faJs, faHtml5, faCss3, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class HomeComponent {


  floatingIcons = [
    { name: faReact, style: { top: '20%', left: '80%', fontSize: '2.5rem', animationDelay: '1s' } },
    { name: faJs, style: { top: '50%', left: '10%', fontSize: '2rem', animationDelay: '2s' } },
    { name: faHtml5, style: { top: '70%', left: '85%', fontSize: '2.2rem', animationDelay: '3s' } },
    { name: faCss3, style: { top: '85%', left: '15%', fontSize: '2.3rem', animationDelay: '4s' } },
    { name: faCss3Alt, style: this.generateRandomStyle() },
    { name: faAngular, style: this.generateRandomStyle() },
    { name: faNodeJs, style: this.generateRandomStyle() },
    { name: faGitAlt, style: this.generateRandomStyle() },
  ];

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Salma-azz23', icon: faGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/salma-azouzout-98a0592b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: faLinkedin },
    { name: 'Phone', url: 'tel:+212699730733', icon: faPhone },
    { name: 'WhatsApp', icon: faWhatsapp, url: "https://wa.me/0699730733" }, // Lien WhatsApp
    { name: 'Email', icon: faEnvelope, url: "mailto:salma.azouzout03@gmail.com" }, // Lien Email
  ];

  generateRandomStyle() {
    return {
      '--animation-delay': `${Math.random() * 5}s`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    };
  }

  downloadCV() {
    // Ajouter la logique de téléchargement
    const link = document.createElement('a');
    link.href = 'assets/files/cvsalmaazouzout.pdf';
    link.download = 'Salma_AZOUZOUT_CV.pdf';
    link.click();
  };
  

  codeLines: any[] = [];

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    this.codeLines = Array.from({length: 50}, () => ({
      left: Math.random() * window.innerWidth,
      delay: Math.random() * 5
    }));
  }
}
}