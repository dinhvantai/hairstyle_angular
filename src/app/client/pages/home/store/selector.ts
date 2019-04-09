import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IHomeState} from './state';

export const homeState = createFeatureSelector('home');

export const selectIsSpinnerRenderBooking = createSelector(
    homeState,
    (state: IHomeState) => state.isSpinnerRenderBooking
);

export const selectDepartments = createSelector(
    homeState,
    (state: IHomeState) => state.departments
);

export const selectStylists = createSelector(
    homeState,
    (state: IHomeState) => state.stylists
);

export const selectRenderBookings = createSelector(
    homeState,
    (state: IHomeState) => state.renderBookings
);


