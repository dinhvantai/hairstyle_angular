import {Action} from '@ngrx/store';
import {IDepartment} from '@app/client/interfaces/IDepartment';
import {IStylist} from '@app/client/interfaces/IStylist';
import {IRenderBooking} from '@app/client/interfaces/IRenderBooking';
import {HttpParams} from '@angular/common/http';

export enum ActionTypes {
    DoSetSpinnerRenderBooking = '[Home Page] Do set Spinner Render Booking',
    DoFetchDepartment = '[Home Page] Do Fetch Department',
    FetchDepartmentSuccess = '[Home Page] Fetch Department Success',
    FetchDepartmentError = '[Home Page] Fetch Department Error',
    DoFetchStylist = '[Home Page] Do Fetch Stylist',
    FetchStylistSuccess = '[Home Page] Fetch Stylist Success',
    DoFetchRenderBooking = '[Home Page] Do Fetch RenderBooking',
    FetchRenderBookingSuccess = '[Home Page] Fetch RenderBooking Success',
}

export class DoSetSpinnerRenderBooking implements Action {
    public readonly type = ActionTypes.DoSetSpinnerRenderBooking;

    public constructor(public payload: boolean) {
    }
}

export class DoFetchDepartment implements Action {
    public readonly type = ActionTypes.DoFetchDepartment;
}

export class FetchDepartmentSuccess implements Action {
    public readonly type = ActionTypes.FetchDepartmentSuccess;

    constructor(public payload: IDepartment[]) {
    }
}

export class FetchDepartmentError implements Action {
    public readonly type = ActionTypes.FetchDepartmentError;

    constructor(public payload) {
    }
}

export class DoFetchStylist implements Action {
    public readonly type = ActionTypes.DoFetchStylist;

    constructor(public payload: { departmentId: number }) {
    }
}

export class FetchStylistSuccess implements Action {
    public readonly type = ActionTypes.FetchStylistSuccess;

    constructor(public payload: { stylist: IStylist[], departmentId: number }) {
    }
}

export class DoFetchRenderBooking implements Action {
    public readonly type = ActionTypes.DoFetchRenderBooking;

    constructor(public payload: HttpParams) {
    }
}

export class FetchRenderBookingSuccess implements Action {
    public readonly type = ActionTypes.FetchRenderBookingSuccess;

    constructor(public payload: IRenderBooking[]) {
    }
}

export type ActionsUnion = DoSetSpinnerRenderBooking
    | DoFetchDepartment
    | FetchDepartmentSuccess
    | FetchDepartmentError
    | DoFetchStylist
    | FetchStylistSuccess
    | DoFetchRenderBooking
    | FetchRenderBookingSuccess;
