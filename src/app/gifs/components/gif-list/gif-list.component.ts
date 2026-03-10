import { Component, input } from '@angular/core';
import { GifListeItemComponent } from './gitListeItem/gif-liste-item.component';

@Component({
  selector: 'gif-list',
  imports: [GifListeItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = input.required<string[]>();
}
