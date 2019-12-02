import { Component }        from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent {

    /**
     * By passing the service class to the constructor dependency injection
     * will automatically instantiate it for us.
     *
     * @param {MyServiceService} myServiceService class instance reference.
     */
    public constructor(public myServiceService: MyServiceService) {

    }

}
