import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { biblioPageRoutes } from "./biblio-page/biblio-page-routing.module";
import { cliPageRoutes } from "./cli-page/cli-page-routing.module";
import { compPageRoutes } from "./comp-page/comp-page-routing.module";
import { dataBindingRoutes } from "./data-binding/data-binding-routes.module";
import { direcPageRoutes } from "./direc-page/direc-page-routing.module";
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
    ...modPageRoutes,
    ...cliPageRoutes,
    ...biblioPageRoutes,
    ...dataBindingRoutes,
    ...direcPageRoutes

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