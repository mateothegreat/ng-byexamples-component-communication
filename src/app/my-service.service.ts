import { Injectable }  from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class MyServiceService {

    /**
     * Holds the current page name.
     */
    public currentPage: string;

    public someNumber: number = 0;
    public someArray: Array<string> = [];

    public formControl: FormControl = new FormControl('');

    public constructor() {

        this.formControl.valueChanges.subscribe(value => this.someNumber = value);

    }

}
