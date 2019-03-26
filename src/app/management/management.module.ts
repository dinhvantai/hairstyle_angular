import { HeaderManagementComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { LayoutManagementComponent } from './layout/layout.component';
import { SidebarManagementComponent } from './sidebar/sidebar.component';

const routing: Routes = [
    {
        path: '',
        component: LayoutManagementComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routing),
        AppMaterialModule,
    ],
    declarations: [
        LayoutManagementComponent,
        HeaderManagementComponent,
        SidebarManagementComponent,
    ],
})

export class ManagementModule { }

