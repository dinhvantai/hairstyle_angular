import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMaterialModule} from 'src/app/app-material.module';
import {HeaderClientComponent} from './components/header/header.component';
import {LayoutClientComponent} from './components/layout/layout.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

const routing: Routes = [
    {
        path: '',
        component: LayoutClientComponent,
        children: [
            {
                path: '',
                loadChildren: './pages/home/home.module#HomeClientModule',
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
        AppMaterialModule,
    ],
    declarations: [
        LayoutClientComponent,
        HeaderClientComponent,
    ],
})

export class ClientModule {
}

