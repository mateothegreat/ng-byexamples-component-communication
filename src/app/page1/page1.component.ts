import { Component }        from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: [ './page1.component.scss' ]
})
export class Page1Component {


    /**
     * By passing the service class to the constructor dependency injection
     * will automatically instantiate it for us.
     *
     * @param {MyServiceService} myServiceService class instance reference.
     */
    public constructor(public myServiceService: MyServiceService) {
        
    }

}
