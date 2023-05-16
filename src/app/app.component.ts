import { Component, isStandalone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour et bienvenue sur la solution de la quete 03.1 (oui je sais c\'est long mais j\aime bien écrire des trucs longs pour voir si ça rend aussi bien que des trucs plus courts)';
  isAdmin : boolean = false;
  changeValue = () => this.isAdmin = !this.isAdmin
  
}
