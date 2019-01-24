import { Injectable } from "@angular/core";
import {
    Routes,
    Router,
    RouterModule,
    ActivatedRouteSnapshot
    } from "@angular/router";

import { InitComponent } from "../init/init.component";
import { DevComponent }  from "../dev/dev.component";
import { RunComponent }  from "../run/run.component";

@Injectable()
export class ActivateRoute {
    private isFirstNavigation = true;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
// TODO temp disabled!!!
//        if (this.isFirstNavigation) {
//            this.isFirstNavigation = false;
//            if (route.component !== InitComponent) {
//                this.router.navigateByUrl("");
//                return false;
//            }
//        }
        return true;
    }
}

const routes: Routes = [
    { path: "dev", component: DevComponent,  canActivate: [ActivateRoute] },
    { path: "run", component: RunComponent,  canActivate: [ActivateRoute] },
    { path: "",    component: InitComponent, canActivate: [ActivateRoute] },
    { path: "**",  redirectTo: "" }
];

export const RoutingConfig = RouterModule.forRoot(routes);