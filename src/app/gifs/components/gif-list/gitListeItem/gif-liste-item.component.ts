import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-liste-item',
  imports: [],
  templateUrl: './gif-liste-item.component.html',
})
//gifs-side-menu-header
//side-menu-header.component
export class GifListeItemComponent {
  imageUrl = input.required<string>();
}
