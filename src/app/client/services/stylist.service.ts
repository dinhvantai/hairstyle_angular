import { Injectable } from '@angular/core';
import {AbstractService} from '@app/client/services/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class StylistService extends AbstractService {
    apiFetchStylistByDepartment(departmentId: number) {
        return this.http.get(this.url(`get-stylist-by-salonId/${departmentId}`));
    }
}
