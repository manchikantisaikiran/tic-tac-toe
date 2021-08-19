import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';

  ngOnInit(){
    const html = document.querySelector('html');
    html?.classList.add('custom');
  }

  toggleTheme(theme: any) {
    const html = document.querySelector('html');
    html ? html.className = '' : null;
    if (theme == "custom") {
      html?.classList.add('custom');
    } else if(theme == "bootstrap") {
      html?.classList.add('bootstrap');
    }else{
      html?.classList.add('material');
    }
  }
}
