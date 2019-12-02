import { Component }        from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

    /**
     * By passing the service class to the constructor dependency injection
     * will automatically instantiate it for us.
     *
     * @param {MyServiceService} myServiceService class instance reference.
     */
    public constructor(public myServiceService: MyServiceService) {

    }

}
