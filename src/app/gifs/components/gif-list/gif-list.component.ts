import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListeItemComponent } from "./gitListeItem/gif-liste-item.component";

@Component({
  selector: 'gif-list',
  imports: [GifListeItemComponent],
  templateUrl: './gif-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent { }
