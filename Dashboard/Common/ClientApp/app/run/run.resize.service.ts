import { Injectable } from "@angular/core";

import { ScssVariables } from "../common/services/scss.variables.service";
import { Buttons } from "./run.button.model";
import { Cells }   from "./run.cell.model";

@Injectable()
export class ResizeService
{
    constructor(private cells: Cells,
                private buttons: Buttons,
                private scssVariables: ScssVariables) { }

    resize(): void {
        const width = window.innerWidth;
        if (width < this.scssVariables.getSize("sm")) {
            this.processButtons(3, false);
        } else if (width < this.scssVariables.getSize("md")) {
            this.processButtons(1, false);
        } else {
            const set = [];
            const cells = this.cells.toArray();
            cells.forEach(_ => set[_.children().data("position")]
                                 = _.children().detach());
            cells.forEach(_ => _.append(set[_.data("position")]));
            this.processButtons(null, true);
        }
    }

    private processButtons(cellId: number, isDisabled: boolean): void {
        this.buttons.toArray().forEach(_ => _.isDisabled = isDisabled);
        if (cellId) {
            const id = this.cells.get(cellId).children().data("position");
            this.buttons.get(id).isDisabled = true;
        }
    }
}