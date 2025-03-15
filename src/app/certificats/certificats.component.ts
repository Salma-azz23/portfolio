import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-certificats',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './certificats.component.html',
  styleUrls: ['./certificats.component.scss'],
})
export class CertificatsComponent {
  // Icônes
  faExpand = faExpand;

  // Liste des certificats
  certificates = [
    {
      title: 'Introduction to Networks course',
      description: 'Cisco Academy.',
      image: 'assets/certificats/cisco.png',
    },
    {
      title: 'Java & Python Programming Mastery',
      description: 'Learn to code like a pro',
      image: 'assets/certificats/java&python.jpg',
    },
    {
      title: 'Wordpress',
      description: 'Website Developer Course',
      image: 'assets/certificats/wordpress.jpg',
    },
    {
      title: 'Design graphique',
      description: 'GoxLearning',
      image: 'assets/certificats/goxlearning.jpg',
    },
    {
      title: 'React Crash Course',
      description: 'Udemy',
      image: 'assets/certificats/react.jpg',
    },
  ];

  // Index du certificat actif
  activeCertificateIndex = 0;

  isCertificateModalOpen = false;
  selectedCertificateImage = '';

    // Ouvrir la boîte modale avec l'image du certificat
    openCertificateModal(imageUrl: string) {
      this.selectedCertificateImage = imageUrl;
      this.isCertificateModalOpen = true;
    }
  
    // Fermer la boîte modale
    closeCertificateModal() {
      this.isCertificateModalOpen = false;
    }
  }