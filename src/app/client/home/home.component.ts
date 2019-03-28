import { environment } from '@env/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface IDepartment {
    id: number;
    name: string;
    address: string;
}

@Component({
    selector: 'app-client-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeClientComponent implements OnInit {
    isLinear = true;
    formUser: FormGroup;
    formDepartment: FormGroup;

    departments: IDepartment[];

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.formUser = this.formBuilder.group({
            fullName: ['', Validators.required],
            phone: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.pattern('^[0-9]{6,12}$'),
            ]],
        });
        this.formDepartment = this.formBuilder.group({
            departmentId: ['', Validators.required],
        });

        // const headers = new HttpHeaders({
        //     'Access-Control-Allow-Origin': '*'
        // });
        // headers.( 'Access-Control-Allow-Origin', '*');
        // 'Content-Type': 'application/json',
        // Accept: 'application/json',)
        this.http.get(environment.baseUrl + '/get-salons', {
            headers:  new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            })
        })
            .subscribe(
                response => console.log(response),
                err => console.log(err)
            );
            // this.departments = response.data);
    }

    doChangeSelection(e: { selectedIndex: number }) {
        if (e.selectedIndex === 2) {
            this.selectedStepThree();
        }
    }

    selectedStepThree() {

    }
}
