﻿import { Injectable } from "@angular/core";

@Injectable()
export class Buttons {
    private buttons: Button[];

    init(): void {
        this.buttons = new Array(3).fill(null);
        Object.keys(this.buttons).forEach(_ => {
            const id = this.buttons.length - parseInt(_);
            this.buttons[_] = new Button(id, true);
        });
    }

    get(id: number): Button {
        return this.buttons.find(_ => _.id === id);
    }

    toArray(): Button[] {
        return this.buttons;
    }
}

class Button {
    constructor(public id: number,
                public isDisabled: boolean) { }
}