import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faJava,
  faBootstrap,
  faReact,
  faAngular,
  faPhp,
  faGitAlt,
  faGithub,
  faFigma,
  faPython,
  faSymfony,
  faWordpress,
  faMicrosoft,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCode,
  faPaintBrush,
  faLeaf,
  faWind,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  activeTab: 'skills' | 'tools' = 'skills';

  // Liste des compétences (skills)
  skills = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    { name: 'Java', icon: faJava },
    { name: 'Tailwind', icon: faWind },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'React', icon: faReact },
    { name: 'Angular', icon: faAngular },
    { name: 'PHP', icon: faPhp },
    { name: 'Symfony', icon: faSymfony },
    { name: 'Spring', icon: faLeaf },
    { name: 'Spring Boot', icon: faLeaf },
    { name: 'Wordpress', icon: faWordpress },
    { name: 'MySQL', icon: faDatabase },
    { name: 'C#', icon: faMicrosoft },
    { name: 'Python', icon: faPython },
  ];

  // Liste des outils (tools)
  tools = [
    { name: 'VS Code', icon: faLaptopCode },
    { name: 'Eclipse', icon: faLaptopCode },
    { name: 'Android Studio', icon: faAndroid },
    { name: 'Canva', icon: faPaintBrush },
    { name: 'Figma', icon: faFigma },
    { name: 'Git', icon: faGitAlt },
    { name: 'GitHub', icon: faGithub },
    { name: 'IntelliJ', icon: faCode },
  ];

  // Méthode pour définir l'onglet actif
  setActiveTab(tab: 'skills' | 'tools') {
    this.activeTab = tab;
  }
}