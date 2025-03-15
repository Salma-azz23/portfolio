import { Component } from '@angular/core';
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [FontAwesomeModule, CommonModule],
})
export class ContactComponent {
  // Icônes et informations de contact
  contactItems = [
    { name: 'Email', icon: faEnvelope, link: 'mailto:salma.azouzout03@gmail.com' },
    { name: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/in/salma-azouzout-98a0592b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Phone', icon: faPhone, link: 'tel:+212699730733' },
    { name: 'WhatsApp', icon: faWhatsapp, link: 'https://wa.me/0699730733' },
    { name: 'GitHub', icon: faGithub, link: 'https://github.com/Salma-azz23' },
  ];
}