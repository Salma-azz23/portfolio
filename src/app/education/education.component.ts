import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { trigger, transition, style, animate } from '@angular/animations';
import { faGraduationCap, faLaptopCode, faSchool } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class EducationComponent {
  // Icônes FontAwesome
  faGraduationCap = faGraduationCap;
  faLaptopCode = faLaptopCode;
  faSchool = faSchool;

  selectedCardIndex: number | null = null;

  educationItems = [
    {
      date: '2020 - 2021',
      title: 'BACCALAUREAT SCIENCE MATHEMATIQUE A',
      institution: 'Lycée Al Fath',
      details: ['(mention très bien)'],
      icon: faGraduationCap,
    },
    {
      date: '2021 - 2023',
      title: 'CYCLE PREPARATOIRE',
      institution: 'École Nationale des Sciences Appliquées - Oujda',
      details: [
        'Programming languages: MATLAB, C.',
        'Experience with IDE: Visual Studio Code.',
      ],
      icon: faSchool,
    },
    {
      date: '2023 - 2026',
      title: 'CYCLE D’INGENIEUR (Génie Informatique)',
      institution: 'École Nationale des Sciences Appliquées',
      details: [
        'Programming languages: C#.',
        'Experience with IDE: IntelliJ, Visual Studio Code, Visual Studio, Android Studio.',
        'Experience in Database management using SQL Server.',
        'Web programming: React, Angular, Laravel, JEE, Spring Boot, ASP .NET.',
        'Mobile Development: Android, Java.',
        'Experience with tools: Git, GitHub, Docker.',
        'Project management with Scrum.',
      ],
      icon: faLaptopCode,
    },
  ];

  toggleCard(index: number) {
    this.selectedCardIndex = this.selectedCardIndex === index ? null : index;
  }

  hoverIcon(event: MouseEvent) {
    const icon = event.target as HTMLElement;
    icon.style.transform = 'scale(1.2) rotateY(180deg)';
    icon.style.transition = 'transform 0.5s ease';
  }

  resetIcon(event: MouseEvent) {
    const icon = event.target as HTMLElement;
    icon.style.transform = 'scale(1) rotateY(0deg)';
    icon.style.transition = 'transform 0.5s ease';
  }
}