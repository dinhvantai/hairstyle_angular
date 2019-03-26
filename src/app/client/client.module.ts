import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HomeClientComponent } from './home/home.component';
import { HeaderClientComponent } from './header/header.component';
import { LayoutClientComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routing: Routes = [
    {
        path: '',
        component: LayoutClientComponent,
        children: [
            {
                path: '',
                component: HomeClientComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routing),
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HomeClientComponent,
        LayoutClientComponent,
        HeaderClientComponent,
    ],
})

export class ClientModule { }

