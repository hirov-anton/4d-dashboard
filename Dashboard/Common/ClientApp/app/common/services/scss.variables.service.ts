import {Injectable} from "@angular/core";

@Injectable()
export class ScssVariables {
    getSize(name: string): number {
        const size = this.get(`breakpoint-${name}`).slice(0, -2);
        return parseInt(size);
    }

    get(name: string): string {
        return window.getComputedStyle(document.documentElement)
                     .getPropertyValue(`--${name}`)
                     .trim();
    }
}