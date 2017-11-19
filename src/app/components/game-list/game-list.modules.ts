import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { GAME_LIST_ROUTING } from './game-list.routes';

// Components
import { GameListComponent } from './game-list.component';

@NgModule({
    imports: [
        CommonModule,
        GAME_LIST_ROUTING
    ],
    declarations: [
        GameListComponent
    ]
})

export class GameListModule {}
