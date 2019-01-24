import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ScssVariablesDirective } from "../common/directives/scss.variables.directive";
import { FullScreen }    from "../common/services/fullscreen.service";
import { CellComponent } from "./cell/cell.component";
import { RunComponent }  from "./run.component";
import { ButtonService } from "./run.button.service";
import { ResizeService } from "./run.resize.service";
import { Buttons } from "./run.button.model";
import { Cells }   from "./run.cell.model";

@NgModule({
    imports: [BrowserModule,
              FontAwesomeModule],
    declarations: [ScssVariablesDirective,
                   CellComponent,
                   RunComponent],
    providers: [FullScreen,
                ButtonService,
                ResizeService,
                Buttons,
                Cells]
})
export class RunModule {}