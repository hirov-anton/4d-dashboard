import { Component, ViewChild, ViewChildren, HostListener, QueryList, ElementRef } from "@angular/core";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import { ScssVariablesDirective } from "../common/directives/scss.variables.directive";
import { FullScreen }    from "../common/services/fullscreen.service";
import { CellComponent } from "./cell/cell.component";
import { ButtonService } from "./run.button.service";
import { ResizeService } from "./run.resize.service";
import { Buttons } from "./run.button.model";
import { Cells }   from "./run.cell.model";

@Component({
    templateUrl: "./run.component.html",
    styleUrls:  ["./run.component.scss",
                 "./run.cell.component.scss",
                 "./run.panel.component.scss"]
})
export class RunComponent {
    @ViewChild(ScssVariablesDirective)
    private scssVariales: ScssVariablesDirective;

    @ViewChildren(CellComponent, { read: ElementRef })
    private rowCells: QueryList<ElementRef>;

    private timeoutId = null;
    icon = faArrowsAlt;

    constructor(private cells: Cells,
                private buttons: Buttons,
                private buttonService: ButtonService,
                private resizeService: ResizeService,
                public fullScreen: FullScreen) {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.cells.init(this.rowCells);
            this.buttonService.init(this.scssVariales);
        });
    }

    @HostListener("window:resize")
    onResize() {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            this.resizeService.resize(this.scssVariales);
        }, 100);
    }
}