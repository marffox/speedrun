import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Modules
import { GameListModule } from './components/game-list/game-list.modules';
import { GameRunModule } from './components/game-run/game-run.modules';

// Routes
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        APP_ROUTING,
        GameListModule,
        GameRunModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
