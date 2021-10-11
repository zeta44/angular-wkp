import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { compPageRoutes } from "./comp-page/comp-page-routing.module";
import { landingPageRoutes } from "./landing-page/landing-page-routing.module";
import { modPageRoutes } from "./mod-page/mod-page-routing.module";


export const routes:Routes = [
    {
        path: '',
        redirectTo: '/landingpage',
        pathMatch: 'full'
    },
    ...landingPageRoutes,
    ...compPageRoutes,
    ...modPageRoutes

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}