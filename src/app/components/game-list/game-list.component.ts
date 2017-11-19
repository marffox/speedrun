import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GameListService } from '../../services/game-list.service';

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

    gameList$: Observable<any>;

    constructor(private gameListService: GameListService, private router: Router) { }

    ngOnInit() {
        this.gameList$ = this.gameListService.gameList;
        this.gameListService.getGameList();
    }

    goToGame(id: string) {
        this.router.navigate(['games/', id]);
    }
}
