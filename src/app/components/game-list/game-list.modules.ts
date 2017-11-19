import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { GAME_LIST_ROUTING } from './game-list.routes';

// Services
import { GameListService } from '../../services/game-list.service';

// Components
import { GameListComponent } from './game-list.component';

@NgModule({
    imports: [
        CommonModule,
        GAME_LIST_ROUTING
    ],
    declarations: [
        GameListComponent
    ],
    providers: [
        GameListService
    ],
})

export class GameListModule {}
