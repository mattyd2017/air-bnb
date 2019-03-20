import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Air-BnB';
  componentTitle = 'i am a component from component.ts';

  clickHandler() {
    alert('fuck off from app component');
  }
}
