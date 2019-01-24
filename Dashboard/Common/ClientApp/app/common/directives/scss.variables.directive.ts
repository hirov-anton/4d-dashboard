import { Directive } from "@angular/core";

@Directive({
    selector: "scssVariables"
})
export class ScssVariablesDirective {
    getSize(name: string): number {
        const size = this.get(name).slice(0, -2);
        return parseInt(size);
    }

    get(name: string): string {
        return window.getComputedStyle(document.documentElement)
                     .getPropertyValue(`--${name}`)
                     .trim();
    }
}