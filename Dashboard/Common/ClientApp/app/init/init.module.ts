import { NgModule } from "@angular/core";

import { RoutingConfig } from "../common/routing";
import { InitComponent } from "./init.component";

@NgModule({
    imports: [RoutingConfig],
    declarations: [InitComponent]
})
export class InitModule {}