import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {BookingService} from '@app/client/services/booking.service';
import {Store} from '@ngrx/store';
import * as HomeSelector from '@app/client/pages/home/store/selector';
import {DoFetchDepartment, DoFetchRenderBooking, DoFetchStylist, DoSetSpinnerRenderBooking} from '@app/client/pages/home/store/action';
import {IStylist} from '@app/client/interfaces/IStylist';

@Component({
    selector: 'app-client-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeClientComponent implements OnInit {
    isLinear = true;

    formUser: FormGroup = this.formBuilder.group({
        fullName: ['', Validators.required],
        phone: ['', [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern('^[0-9]{6,12}$'),
        ]],
    });

    selectedDepartmentId: number = null;

    selectedStylistId: number = null;

    selectedBookingId: number = null;

    departments$ = this.store.select(HomeSelector.selectDepartments);
    stylists$ = this.store.select(HomeSelector.selectStylists);
    renderBookings$ = this.store.select(HomeSelector.selectRenderBookings);
    isSpinnerRenderBooking$ = this.store.select(HomeSelector.selectIsSpinnerRenderBooking);

    selectTimes = {
        options: [
            {text: 'Today', key: 0},
            {text: 'Tomorrow', key: 1},
            {text: 'Next day', key: 2},
        ],
        current: 0,
    };

    constructor(
        private store: Store<any>,
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        private bookingSrv: BookingService
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new DoFetchDepartment());
    }

    onSelectDepartment(departmentId: number) {
        this.selectedDepartmentId = departmentId;
        this.selectedStylistId = null;
    }

    doChangeSelection(e: { selectedIndex: number }) {
        if (e.selectedIndex === 2) {
            this.selectedStepThree();
        }
    }

    selectedStepThree() {
        this.getStylistStepThree();
        this.getRenderBookingStepThree();
    }

    getStylistStepThree() {
        let stylists: { [p: number]: IStylist[] } = [];
        this.stylists$.subscribe(s => stylists = s);
        if (stylists[this.selectedDepartmentId]) {
            return;
        }

        this.store.dispatch(new DoFetchStylist({departmentId: this.selectedDepartmentId}));
    }

    onSelectedDay(current) {
        this.selectTimes.current = current;
        this.getRenderBookingStepThree();
    }

    getRenderBookingStepThree() {
        this.selectedBookingId = null;
        const addDay = 24 * 60 * 60 * this.selectTimes.current;
        const currentDate = Math.floor(new Date().getTime() / 1000) + addDay;
        const params = new HttpParams()
            .append('date', '' + currentDate)
            .append('department_id', '' + this.selectedDepartmentId)
            .append('stylist_id', '' + (this.selectedStylistId ? this.selectedStylistId : ''));

        this.store.dispatch(new DoSetSpinnerRenderBooking(true));
        this.store.dispatch(new DoFetchRenderBooking(params));
    }

    onSelectedRenderBooking(booking) {
        if (booking.status) {
            this.selectedBookingId = booking.id;
        }
    }

    onSelectStylist(e) {
        this.selectedStylistId = e.value;
        this.getRenderBookingStepThree();
    }

    onSendBooking() {
        if (!this.selectedBookingId) {
            return this.snackBar.open('No selected booking!', 'Error!', {
                duration: 3 * 1000,
            });
        }

        const params = {
            phone: this.formUser.get('phone').value,
            name: this.formUser.get('fullName').value,
            render_booking_id: this.selectedBookingId,
            stylist_chosen: this.selectedStylistId,
        };

        this.bookingSrv.apiStoreBooking(params).subscribe(
            response => {
                console.log(response);
            },
            xhr => this.snackBar.open(xhr.error.message[0], 'Error!', {duration: 4000})
        );
    }
}
