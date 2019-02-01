import { Component, Input } from "@angular/core";
import { ScssVariables } from "../../common/services/scss.variables.service";

@Component({
    selector: "cell",
    templateUrl: "./cell.component.html",
    styleUrls:  ["./cell.component.scss"]
})
export class CellComponent {
    @Input("position")
    private rowPosition: string;
    get position(): number {
        return parseInt(this.rowPosition);
    }

    lineChartOptions: any;
    lineChartData:    any[];
    lineChartColors:  any[];
    lineChartLabels: string[];
    lineChartType:   string;

    items: number[];
    constructor(private scssVariables: ScssVariables) {}

    ngOnInit() {
        this.items = Array<number>(300).fill(null);
        if (this.position === 2) {
            this.lineChartType = "bar";
            this.lineChartOptions = {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {callback(value) { return `$${value}k`; }}
                    }]
                }
            };
            this.lineChartData = [
                {
                    data: [65, 59, 80, 81, 56, 55, 40],
                    label: "Income",
                    borderWidth: 1
                },
                {
                    data: [28, 48, 40, 19, 86, 27, 90],
                    label: "Outcome",
                    borderWidth: 1
                }
            ];
            this.lineChartLabels = ["January", "February", "March",
                                    "April", "May", "June", "July"];

            this.lineChartColors = [
                {
                    backgroundColor: this.scssVariables.get("cyan"),
                    borderColor: this.scssVariables.get("dark"),
                },
                {
                    backgroundColor: this.scssVariables.get("red"),
                    borderColor: this.scssVariables.get("dark"),
                }
            ];
        }
    }
}