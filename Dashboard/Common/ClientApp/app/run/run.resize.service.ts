import { Injectable } from "@angular/core";

import { ScssVariablesDirective } from "../common/directives/scss.variables.directive";
import { Buttons } from "./run.button.model";
import { Cells }   from "./run.cell.model";

@Injectable()
export class ResizeService
{
    constructor(private cells: Cells,
                private buttons: Buttons) {}

    resize(scssVariales: ScssVariablesDirective): void {
        const buttons = this.buttons;
        const currentButton = buttons.toArray()
                                     .find(_ => _.isDisabled);
        if (currentButton) {
            buttons.get(currentButton.id).isDisabled = false;
        }

        const width = window.innerWidth;
        if (width < scssVariales.getSize("sm")) {
            this.processButton(3);
        } else if (width < scssVariales.getSize("md")) {
            this.processButton(1);
        } else {
            const set = [];
            const cells = this.cells.toArray();
            cells.forEach(_ => set[_.children().data("position")]
                                 = _.children().detach());
            cells.forEach(_ => _.append(set[_.data("position")]));
        }
    }

    private processButton(cellId: number): void {
        const id = this.cells.get(cellId).children().data("position");
        this.buttons.get(parseInt(id)).isDisabled = true;
    }
}