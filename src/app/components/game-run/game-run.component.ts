import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GameListService } from '../../services/game-list.service';

@Component({
    selector: 'app-game-run',
    templateUrl: './game-run.component.html',
    styleUrls: ['./game-run.component.scss']
})
export class GameRunComponent implements OnInit {

    game$: Observable<any>;
    runList$: Observable<any>;
    gameResult: any;
    runListResult: any;
    gameID: string;
    videoLink: string;
    playerName: string;
    runTime: string;

    constructor(private gameListService: GameListService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            this.gameID = params['id'];
        });
    }

    ngOnInit() {
        this.game$ = this.gameListService.game;
        this.runList$ = this.gameListService.runList;
        this.gameListService.getGame(this.gameID);
        this.gameListService.getRunList(this.gameID);
        this.game$.subscribe((data) => {
            this.gameResult = data;
            console.log('Game: ', this.gameResult);
        });
        this.runList$.subscribe((data) => {
            this.runListResult = data;
            console.log('Run list: ', this.runListResult);
            this.videoLink = this.getVideoLink();
            this.playerName = this.getPlayerName();
            this.runTime = this.getRunTime();
        });

    }

    getVideoLink() {
        if (this.runListResult.length) {
            if (this.runListResult[0].videos.links.length) {
                return this.runListResult[0].videos.links[0].uri;
            } else {
                return '';
            }
        }
    }

    getPlayerName() {
        if (this.runListResult.length) {
            if (this.runListResult[0].players.length) {
                return this.runListResult[0].players[0].rel;
            } else {
                return '';
            }
        }
    }

    getRunTime() {
        if (this.runListResult.length) {
            if ('realtime_t' in this.runListResult[0].times) {
                return this.parseSeconds(this.runListResult[0].times.realtime_t);
            } else {
                return null;
            }
        }
    }

    parseSeconds(seconds: number) {
        const date = new Date(null);
        date.setSeconds(seconds);
        const result = date.toISOString().substr(11, 8);
        return result;
    }
}
