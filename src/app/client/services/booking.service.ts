import {Injectable} from '@angular/core';
import {AbstractService} from '@app/client/services/abstract.service';

@Injectable({
    providedIn: 'root'
})
export class BookingService extends AbstractService {
    apiStoreBooking(params: object) {
        return this.http.post(this.url('user_booking'), params);
    }
}
