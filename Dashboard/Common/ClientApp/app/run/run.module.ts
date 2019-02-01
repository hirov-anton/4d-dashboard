import { NgModule } from "@angular/core";
import { ChartsModule }  from "ng2-charts";
import { QuillModule }   from "ngx-quill";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ScssVariables } from "../common/services/scss.variables.service";
import { FullScreen }    from "../common/services/fullscreen.service";
import { CellComponent } from "./cell/cell.component";
import { RunComponent }  from "./run.component";
import { ButtonService } from "./run.button.service";
import { ResizeService } from "./run.resize.service";
import { Buttons } from "./run.button.model";
import { Cells }   from "./run.cell.model";

@NgModule({
    imports: [ChartsModule,
              QuillModule,
              BrowserModule,
              FontAwesomeModule],
    declarations: [CellComponent,
                   RunComponent],
    providers: [FullScreen,
                ScssVariables,
                ButtonService,
                ResizeService,
                Buttons,
                Cells]
})
export class RunModule {}