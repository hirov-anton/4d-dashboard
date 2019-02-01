import { Injectable } from "@angular/core";

import { ScssVariables } from "../common/services/scss.variables.service";
import { Buttons } from "./run.button.model";
import { Cells }   from "./run.cell.model";

@Injectable()
export class ButtonService {
    constructor(private cells: Cells,
                private buttons: Buttons,
                private scssVariables: ScssVariables) { }

    init(): void {
        const buttons = this.buttons;
        buttons.init();

        const width = window.innerWidth;
        if (width < this.scssVariables.getSize("sm")) {
            buttons.get(2).isDisabled = false;
            buttons.get(1).isDisabled = false;
            this.click(1);
        } else if (width < this.scssVariables.getSize("md")) {
            buttons.get(3).isDisabled = false;
            buttons.get(2).isDisabled = false;
        }
    }

    click(selectedId: number): void {
        const buttons = this.buttons;
        const currentId = buttons.toArray()
                                 .find(_ => _.isDisabled)
                                 .id;
        const currentCell = this.cells.getByContentId(currentId);
        const selectedCell = this.cells.getByContentId(selectedId);

        const removed = currentCell.children()
                                   .replaceWith(selectedCell.children());
        selectedCell.append(removed);

        buttons.get(currentId).isDisabled = false;
        buttons.get(selectedId).isDisabled = true;
    }
}