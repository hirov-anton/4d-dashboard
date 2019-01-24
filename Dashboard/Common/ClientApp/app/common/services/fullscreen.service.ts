import { Injectable } from "@angular/core";

@Injectable()
export class FullScreen {
    open(element: any = document.documentElement): void {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }
}