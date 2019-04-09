import {IDepartment} from '@app/client/interfaces/IDepartment';
import {IStylist} from '@app/client/interfaces/IStylist';
import {IRenderBooking} from '@app/client/interfaces/IRenderBooking';

export interface IHomeState {
    isSpinnerRenderBooking: boolean;
    departments: IDepartment[];
    stylists: {
        [index: number]: IStylist[],
    };
    renderBookings: IRenderBooking[];
}

export const initialState: IHomeState = {
    isSpinnerRenderBooking: false,
    departments: [],
    stylists: {},
    renderBookings: [],
};
