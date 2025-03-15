import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { CertificatsComponent } from "./certificats/certificats.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent, EducationComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, CertificatsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'portfolio';
}
