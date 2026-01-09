import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EpisodeService } from '../../services/episode';
import { Episode } from '../../models/episode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episode-details',
  imports: [],
  templateUrl: './episode-details.html'
})
export class EpisodeDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  episode$: Observable<Episode | undefined>;

  constructor(private episodeService: EpisodeService) {
    const episodeNumber = Number(this.route.snapshot.params['id']);

    this.episode$ = this.episodeService.getEpisodeById(episodeNumber);
  }
}
