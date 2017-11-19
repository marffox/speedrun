import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list.component';

const GAME_LIST_ROUTES: Routes = [
    { path: '', component: GameListComponent }
];

export const GAME_LIST_ROUTING = RouterModule.forChild(GAME_LIST_ROUTES);
