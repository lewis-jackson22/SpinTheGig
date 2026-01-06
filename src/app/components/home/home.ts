import { Component } from '@angular/core';
import { EpisodeListComponent } from "../episode-list/episode-list";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EpisodeListComponent],
  template: `
    <app-episode-list></app-episode-list>
  `
})
export class Home {

}
