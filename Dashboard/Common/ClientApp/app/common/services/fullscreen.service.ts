import { Injectable } from "@angular/core";

@Injectable()
export class FullScreen {
    on(element: any = document.documentElement): void {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }

    off(): void {
        const element: any = document;
        if (element.cancelFullScreen) {
            element.cancelFullScreen();
        } else if (element.mozCancelFullScreen) {
            element.mozCancelFullScreen();
        } else if (element.webkitCancelFullScreen) {
            element.webkitCancelFullScreen();
        }
    }

    isOn(): boolean {
        return window.innerHeight === screen.height;
    }
}