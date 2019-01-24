import * as $ from "jquery";
import { Injectable, QueryList, ElementRef } from "@angular/core";

@Injectable()
export class Cells {
    private cells: $[];

    init(rowCells: QueryList<ElementRef>): void {
        this.cells = rowCells.map(_ => $(_.nativeElement).parent());
    }

    getByContentId(id): $ {
        return this.find(_ => _.children().data("position") === id);
    }

    get(id): $ {
        return this.find(_ => _.data("position") === id);
    }

    toArray(): $[] {
        return this.cells;
    }

    private find(action: ($) => $) {
        return this.cells.find(action);
    }
}