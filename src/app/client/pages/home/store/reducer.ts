import * as Home from './action';
import {IHomeState, initialState} from './state';

export function homeReducer(
    state = initialState,
    action: Home.ActionsUnion
): IHomeState {
    switch (action.type) {
        case Home.ActionTypes.DoSetSpinnerRenderBooking: {
            return {
                ...state,
                isSpinnerRenderBooking: action.payload,
            };
        }
        case Home.ActionTypes.FetchDepartmentSuccess: {
            return {
                ...state,
                departments: action.payload,
            };
        }
        case Home.ActionTypes.FetchStylistSuccess: {
            return {
                ...state,
                stylists: {
                    ...state.stylists,
                    [action.payload.departmentId]: action.payload.stylist
                }
            };
        }
        case Home.ActionTypes.FetchRenderBookingSuccess: {
            return {
                ...state,
                renderBookings: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
