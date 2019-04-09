import { Injectable } from '@angular/core';
import {AbstractService} from '@app/client/services/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends AbstractService {
    apiFetchDepartment() {
        return this.http.get(this.url('get-salons'));
    }
}
