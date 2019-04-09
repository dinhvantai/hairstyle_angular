import {IDepartment} from '@app/client/interfaces/IDepartment';

export interface IDepartmentsResponse {
    data: IDepartment[];
    message: string[];
    status: string;
    error: boolean;
}
