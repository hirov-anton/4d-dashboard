import { Injectable } from "@angular/core";
import {
    Routes,
    Router,
    RouterModule,
    ActivatedRouteSnapshot
    } from "@angular/router";

import { PanelComponent } from "../panel/panel.component";
import { InfoComponent }  from "../info/info.component";

@Injectable()
export class ActivateRoute {
    private isFirstNavigation = true;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this.isFirstNavigation) {
            this.isFirstNavigation = false;
            if (route.component !== InfoComponent) {
                this.router.navigateByUrl("/info");
                return false;
            }
        }
        return true;
    }
}

const routes: Routes = [
    { path: "panel", component: PanelComponent, canActivate: [ActivateRoute] },
    { path: "info",  component: InfoComponent,  canActivate: [ActivateRoute] },
    { path: "**",    redirectTo: "/info" }
];

export const RoutingConfig = RouterModule.forRoot(routes);