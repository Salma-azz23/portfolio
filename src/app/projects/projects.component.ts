import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faNodeJs,
  faBootstrap,
  faGithub,
  faReact,
  faSymfony,
  faCss3,
  faAndroid,
  faJava,
  faHtml5,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faLaptopCode,
  faServer,
  faDatabase,
  faMobileAlt,
  faChevronLeft,
  faChevronRight,
  faCogs,
  faNetworkWired,
  faCloud,
  faLeaf,
  faFire,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class ProjectsComponent {
  // Icônes
  faAngular = faAngular;
  faPlayCircle = faPlayCircle;
  faNodeJs = faNodeJs;
  faBootstrap = faBootstrap;
  faGithub = faGithub;
  faCode = faCode;
  faLaptopCode = faLaptopCode;
  faServer = faServer;
  faMobileAlt = faMobileAlt;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCogs = faCogs;
  faNetworkWired = faNetworkWired;
  faCloud = faCloud;
  faDatabase = faDatabase;


  // Liste des projets
  projects = [
    {
      title: 'Arti',
      description:
        'Development of a web platform to manage artists, their works, and interactions with visitors on an art exhibition website.',
      image: 'assets/images/arti.jpg',
      technologies: [faSymfony, faDatabase, faCss3],
      githubLink: 'https://github.com/Salma-azz23/Arti.git',
      demoLink: '/assets/videos/arti.mp4',
      showFullDescription: false,
    },
    {
      title: 'Hirafi',
      description:
        'Creation of a web platform connecting artisans and clients through a responsive interface and an intelligent chatbot.',
      image: 'assets/images/hirafi.jpg',
      technologies: [faReact, faLeaf, faDatabase],
      githubLink: 'https://github.com/fatima236/HIRAFI_REACT.git',
      demoLink: 'assets/videos/hirafi.mp4',
      showFullDescription: false,
    },
    {
      title: 'Portfolio',
      description:
        'Development of an interactive portfolio showcasing my projects and skills in web development.',
      image: 'assets/images/portefolio.png',
      technologies: [faAngular, faSass, faHtml5],
      githubLink: 'https://github.com/votre-username/projet3',
      showFullDescription: false,
    },
    {
      title: 'Coducatif',
      description:
        'Creation of an educational mobile app combining playful learning and flexibility with an interactive quiz.',
      image: 'assets/images/coducatiff.png',
      technologies: [faAndroid, faJava, faFire],
      githubLink: 'https://github.com/Salma-azz23/coducatif.git',
      demoLink: 'assets/videos/coducatif.mp4',
      showFullDescription: false,
    },
  ];

  // Index du slide actif
  activeIndex = 0;

  isModalOpen = false;
  selectedImage = '';

  // Ouvrir la vidéo de démo dans une nouvelle fenêtre
openDemo(demoLink: string) {
  window.open(demoLink, '_blank');
}

  // Passer au slide précédent
  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.projects.length) % this.projects.length;
  }

  // Passer au slide suivant
  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
  }

  // Aller à un slide spécifique
  goToSlide(index: number) {
    this.activeIndex = index;
  }

    // Ouvrir la boîte modale avec l'image sélectionnée
    openModal(imageUrl: string) {
      this.selectedImage = imageUrl;
      this.isModalOpen = true;
    }
  
    // Fermer la boîte modale
    closeModal() {
      this.isModalOpen = false;
    }

      // Basculer l'affichage complet de la description
  toggleDescription(project: any) {
    project.showFullDescription = !project.showFullDescription;
  }
}