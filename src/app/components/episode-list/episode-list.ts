import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EpisodeService } from '../../services/episode';
import { Episode } from '../../models/episode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './episode-list.html'
})
export class EpisodeListComponent {
  episodes$: Observable<Episode[]>;

  constructor(private episodeService: EpisodeService) {
    this.episodes$ = this.episodeService.getEpisodes();
  }
}
