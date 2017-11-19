import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class GameListService {
    gameList: Observable<any>;
    game: Observable<any>;
    runList: Observable<any>;
    private _gameList: Subject<any>;
    private _game: Subject<any>;
    private _runList: Subject<any>;
    private dataStore: {
        gameList: any;
        game: any;
        runList: any;
    };

    constructor(private http: Http) {
        this.dataStore = {
            gameList: {},
            game: {},
            runList: {}
        };
        this._gameList = new Subject();
        this._game = new Subject();
        this._runList = new Subject();
        this.gameList = this._gameList.asObservable();
        this.game = this._game.asObservable();
        this.runList = this._runList.asObservable();
    }

    getGameList() {
        const url = 'https://www.speedrun.com/api/v1/games';

        this.http.get(url)
            .map(this.extractData)
            .subscribe(
                data => {
                    this.dataStore.gameList = data.data;
                    this._gameList.next(Object.assign({}, this.dataStore).gameList);
                },
                error => {
                    console.log('<<Could not load game list>>');
                    this.handleError(error);
                }
            );
    }

    getGame(id: string) {
        const url = 'https://www.speedrun.com/api/v1/games/' + id;

        this.http.get(url)
            .map(this.extractData)
            .subscribe(
                data => {
                    this.dataStore.game = data.data;
                    this._game.next(Object.assign({}, this.dataStore).game);
                },
                error => {
                    console.log('<<Could not load game>>');
                    this.handleError(error);
                }
            );
    }

    getRunList(id: string) {
        const url = 'https://www.speedrun.com/api/v1/runs?game=' + id;

        this.http.get(url)
            .map(this.extractData)
            .subscribe(
                data => {
                    this.dataStore.runList = data.data;
                    this._runList.next(Object.assign({}, this.dataStore).runList);
                },
                error => {
                    console.log('<<Could not load run list>>');
                    this.handleError(error);
                }
            );
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
