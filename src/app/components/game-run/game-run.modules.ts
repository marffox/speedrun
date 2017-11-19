import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { GAME_RUN_ROUTING } from './game-run.routes';

// Services
import { GameListService } from '../../services/game-list.service';

// Components
import { GameRunComponent } from './game-run.component';

@NgModule({
    imports: [
        CommonModule,
        GAME_RUN_ROUTING
    ],
    declarations: [
        GameRunComponent
    ],
    providers: [
        GameListService
    ],
})

export class GameRunModule {}

