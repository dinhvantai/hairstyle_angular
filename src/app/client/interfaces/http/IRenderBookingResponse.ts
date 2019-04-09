import {IRenderBooking} from '@app/client/interfaces/IRenderBooking';

export interface IRenderBookingResponse {
    data: {
        renders: IRenderBooking[],
        status: string;
        title: string;
    };
    message: string[];
    status: string;
    error: boolean;
}
