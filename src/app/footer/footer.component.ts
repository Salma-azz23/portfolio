import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number | null = null;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear(); // Récupère l'année actuelle
  }

}
