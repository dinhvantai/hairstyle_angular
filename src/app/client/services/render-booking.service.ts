import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {AbstractService} from '@app/client/services/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class RenderBookingService extends AbstractService {
    apiFetchBooking(params: HttpParams) {
        return this.http.get(this.url('get-render-by-depart-stylist'), {params});
    }
}
