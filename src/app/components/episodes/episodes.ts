import { Component } from '@angular/core';
import { EpisodeListComponent } from "../episode-list/episode-list";

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [EpisodeListComponent],
  templateUrl: './episodes.html'
})
export class Episodes {

}
