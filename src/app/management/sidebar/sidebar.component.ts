import {
    ChangeDetectorRef,
    Component,
    OnDestroy
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
}

const MenuItems: Menu[] = [
    { state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer' },
];

@Component({
    selector: 'app-management-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: []
})

export class SidebarManagementComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    menuItems: Menu[] = MenuItems;

    private readonly mobileQueryListener: () => void;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
    ) {
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this.mobileQueryListener);
    }

    ngOnDestroy(): void {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
