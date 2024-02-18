import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRotas } from "./pages/app.routes";
import { AppComponent } from "./pages/app.component";
import { SpotifyService } from "./services/Spotify.service";

@NgModule(
    {
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            RouterModule.forRoot(AppRotas),
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
export class AppModule { }