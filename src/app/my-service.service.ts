import { Injectable }  from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class MyServiceService {

    /**
     * Holds the current page name.
     *
     * @type {string}
     */
    public currentPage: string;

    /**
     * Holds the value of the <input>'s.
     *
     * @type {number}
     */
    public someNumber: number = 0;

    /**
     * FormControl to hold the value of the <input> on each components page.
     * @type {FormControl}
     */
    public formControl: FormControl = new FormControl('');

    public constructor() {

        //
        // Subscribe to the formControl's changes and update the service value.
        //
        this.formControl.valueChanges.subscribe(value => this.someNumber = value);

    }

}
