import { Component, Input } from "@angular/core";

@Component({
    selector: "cell",
    templateUrl: "./cell.component.html",
    styleUrls:  ["./cell.component.scss"]
})
export class CellComponent {
    items: number[];

    ngOnInit() {
        this.items = Array<number>(300).fill(null);
    }

    @Input()
    position: number;
}