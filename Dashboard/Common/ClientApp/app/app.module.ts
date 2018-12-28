import { BrowserModule } from "@angular/platform-browser";
import { NgModule }      from "@angular/core";

import { AppComponent }   from "./app.component";
import { PanelComponent } from "./panel/panel.component";
import { InfoComponent }  from "./info/info.component";
import { ActivateRoute, RoutingConfig }  from "./config/config.routing";

@NgModule({
  declarations: [AppComponent, PanelComponent, InfoComponent],
  imports: [BrowserModule, RoutingConfig],
  providers: [ActivateRoute],
  bootstrap: [AppComponent]
})

export class AppModule { }