import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePdf, faCheckCircle, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  // Icônes
  faFilePdf = faFilePdf;
  faCheckCircle = faCheckCircle;
  faTasks = faTasks;

  // Ouvrir l'image en plein écran
  openImage(imageUrl: string) {
    const overlay = document.getElementById('image-overlay');
    const fullsizeImage = document.getElementById('fullsize-image') as HTMLImageElement;
    if (overlay && fullsizeImage) {
      fullsizeImage.src = imageUrl;
      overlay.classList.add('active');
    }
  }

  // Fermer l'overlay
  closeImage() {
    const overlay = document.getElementById('image-overlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
  }
}