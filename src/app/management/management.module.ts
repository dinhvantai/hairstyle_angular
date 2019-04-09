import {HeaderManagementComponent} from './header/header.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppMaterialModule} from 'src/app/app-material.module';
import {LayoutManagementComponent} from './layout/layout.component';
import {SidebarManagementComponent} from './sidebar/sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

const routing: Routes = [
    {
        path: '',
        component: LayoutManagementComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routing),
        EffectsModule.forRoot([]),
        StoreModule.forRoot({router: routerReducer}),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({maxAge: 25}),
        CommonModule,
        AppMaterialModule,
    ],
    declarations: [
        LayoutManagementComponent,
        HeaderManagementComponent,
        SidebarManagementComponent,
        DashboardComponent,
    ],
})

export class ManagementModule {
}

