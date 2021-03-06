import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ActivateRoute, RoutingConfig } from "./common/routing";
import { AppComponent } from "./app.component";
import { InitModule }   from "./init/init.module";
import { RunModule }    from "./run/run.module";
import { DevModule }    from "./dev/dev.module";


@NgModule({
    imports: [BrowserModule,
              InitModule,
              RunModule,
              DevModule,
              RoutingConfig],
    declarations: [AppComponent],
    providers: [ActivateRoute],
    bootstrap: [AppComponent]
})
export class AppModule {}