import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMaterialModule} from 'src/app/app-material.module';
import {HomeClientComponent} from './component/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HomeEffect} from '@app/client/pages/home/store/effect';
import {homeReducer} from '@app/client/pages/home/store/reducer';
import {CommonModule} from '@angular/common';

const routing: Routes = [
    {
        path: '',
        component: HomeClientComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routing),
        EffectsModule.forFeature([HomeEffect]),
        StoreModule.forFeature('home', homeReducer),
        CommonModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HomeClientComponent,
    ],
})

export class HomeClientModule {
}

