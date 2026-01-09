import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Episodes } from './components/episodes/episodes';
import { EpisodeDetails } from './components/episode-details/episode-details';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page'
    },
    {
        path: 'episodes',
        component: Episodes,
        title: 'Episodes Page'
    },
    {
        path: 'episodes/:id',
        component: EpisodeDetails,
        title: 'Episode Details Page'
    }
];
