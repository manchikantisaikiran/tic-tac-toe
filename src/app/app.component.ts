import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';

  toggleTheme(e: any) {
    const body = document.querySelector('body');
    if (!e.target.checked) {
      body ? body.className = '' : null;
      body?.classList.add('bootstrap');
    } else {
      body ? body.className = '' : null;
      body?.classList.add('material');
    }
  }
}
