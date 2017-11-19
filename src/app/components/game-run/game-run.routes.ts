import { RouterModule, Routes } from '@angular/router';
import { GameRunComponent } from './game-run.component';

const GAME_RUN_ROUTES: Routes = [
    { path: 'games/:id', component: GameRunComponent }
];

export const GAME_RUN_ROUTING = RouterModule.forChild(GAME_RUN_ROUTES);
