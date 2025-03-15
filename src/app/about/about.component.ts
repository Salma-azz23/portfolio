import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {
  codeLines = [
    { keyword: 'const', text: 'aboutMe = {' },
    { keyword: 'name', text: ': "Salma Azouzout",' },
    { keyword: 'role', text: ': "Web Developer",' },
    { keyword: 'passion', text: ': "Creating digital experiences",' },
    { keyword: 'education', text: ': "Computer Engineering Student",' },
    { keyword: '}', text: '' },
  ];
}