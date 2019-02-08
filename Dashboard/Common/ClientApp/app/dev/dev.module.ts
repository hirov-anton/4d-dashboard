import { NgModule } from "@angular/core";

import { DevComponent }     from "./dev.component";
import { EditComponent }    from "./edit/edit.component";
import { PreviewComponent } from "./preview/preview.component";

@NgModule({
    declarations: [DevComponent,
                   EditComponent,
                   PreviewComponent]
})
export class DevModule {}