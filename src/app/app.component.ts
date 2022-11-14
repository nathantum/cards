import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Nature',
      imageUrl: 'assets/nature.png',
      username: 'nature',
      content: 'I saw this neat nature'
    },
    {
      title: 'Neat Roses',
      imageUrl: 'assets/roses.png',
      username: 'flowers',
      content: 'I saw this neat roses'
    },
    {
      title: 'Neat Sunrise',
      imageUrl: 'assets/sunrise.png',
      username: 'sunrise',
      content: 'I saw this neat sunrise'
    },
  ]
}
