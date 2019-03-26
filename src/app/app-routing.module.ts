import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './client/client.module#ClientModule',
    },
    {
        path: 'admin',
        loadChildren: './management/management.module#ManagementModule',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        }),
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }

