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
    { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
    { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
    { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
    { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
    { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
    { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
    {
        state: 'expansion',
        type: 'link',
        name: 'Expansion Panel',
        icon: 'vertical_align_center'
    },
    { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
    { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
    {
        state: 'progress-snipper',
        type: 'link',
        name: 'Progress snipper',
        icon: 'border_horizontal'
    },
    {
        state: 'progress',
        type: 'link',
        name: 'Progress Bar',
        icon: 'blur_circular'
    },
    {
        state: 'dialog',
        type: 'link',
        name: 'Dialog',
        icon: 'assignment_turned_in'
    },
    { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
    { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
    { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
    {
        state: 'slide-toggle',
        type: 'link',
        name: 'Slide Toggle',
        icon: 'all_inclusive'
    }
];

@Component({
    selector: 'app-management-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: []
})

export class SidebarManagementComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    menuItems: Menu[] = MenuItems;

    private mobileQueryListener: () => void;

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
