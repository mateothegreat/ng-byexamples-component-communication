import { Component }             from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MyServiceService }      from './my-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    /**
     * By passing the service class to the constructor dependency injection
     * will automatically instantiate it for us.
     *
     * @param {MyServiceService} myServiceService class instance reference.
     */
    public constructor(public myServiceService: MyServiceService,
                       private router: Router) {

        router.events.subscribe(event => {

            if (event instanceof NavigationEnd) {

                myServiceService.currentPage = event.url;

            }

        });

    }
}
