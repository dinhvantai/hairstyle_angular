import {IStylist} from '@app/client/interfaces/IStylist';

export interface IStylistsResponse {
    data: IStylist[];
    message: string[];
    status: string;
    error: boolean;
}
