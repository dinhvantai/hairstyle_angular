import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class AbstractService {
    constructor(protected http: HttpClient) {
    }

    protected url(endPoint: string) {
        return `${environment.baseUrl}/${endPoint}`;
    }
}
