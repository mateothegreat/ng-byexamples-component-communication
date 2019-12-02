import { Component }        from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: [ './page2.component.scss' ]
})
export class Page2Component {

    /**
     * By passing the service class to the constructor dependency injection
     * will automatically instantiate it for us.
     *
     * @param {MyServiceService} myServiceService class instance reference.
     */
    public constructor(public myServiceService: MyServiceService) {

    }

}
