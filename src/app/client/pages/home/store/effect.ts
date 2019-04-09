import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DepartmentService} from '@app/client/services/department.service';
import * as HomeStore from './action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {IDepartmentsResponse} from '@app/client/interfaces/http/IDepartmentsResponse';
import {IStylistsResponse} from '@app/client/interfaces/http/IStylistsResponse';
import {StylistService} from '@app/client/services/stylist.service';
import {HttpParams} from '@angular/common/http';
import {RenderBookingService} from '@app/client/services/render-booking.service';
import {IRenderBookingResponse} from '@app/client/interfaces/http/IRenderBookingResponse';

@Injectable()
export class HomeEffect {
    @Effect()
    doFetchDepartment$ = this.action$.pipe(
        ofType(HomeStore.ActionTypes.DoFetchDepartment),
        mergeMap(() => this.departSvr.apiFetchDepartment()
            .pipe(
                map((res: IDepartmentsResponse) => new HomeStore.FetchDepartmentSuccess(res.data)),
                catchError(error => of(new HomeStore.FetchDepartmentError(error)))
            )
        )
    );

    @Effect()
    doFetchStylist$ = this.action$.pipe(
        ofType(HomeStore.ActionTypes.DoFetchStylist),
        mergeMap((action: { payload: { departmentId: number } }) => this.stylistSvr
            .apiFetchStylistByDepartment(action.payload.departmentId)
            .pipe(
                map((res: IStylistsResponse) => new HomeStore
                    .FetchStylistSuccess({stylist: res.data, departmentId: action.payload.departmentId})
                ),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect()
    doFetchRenderBooking$ = this.action$.pipe(
        ofType(HomeStore.ActionTypes.DoFetchRenderBooking),
        mergeMap((action: { payload: HttpParams }) => this.renderBookingSvr
            .apiFetchBooking(action.payload)
            .pipe(
                mergeMap((res: IRenderBookingResponse) => [
                    new HomeStore.DoSetSpinnerRenderBooking(false),
                    new HomeStore.FetchRenderBookingSuccess(res.data.renders)
                ]),
                catchError(() => EMPTY)
            )
        )
    );

    constructor(
        private action$: Actions,
        private departSvr: DepartmentService,
        private stylistSvr: StylistService,
        private renderBookingSvr: RenderBookingService
    ) {
    }
}

