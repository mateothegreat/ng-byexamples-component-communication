import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }       from '@angular/platform-browser';
import { RouterModule }        from '@angular/router';

import { AppComponent }    from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Page1Component }  from './page1/page1.component';
import { Page2Component }  from './page2/page2.component';

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent,
        FooterComponent,
        Page1Component,
        Page2Component

    ],

    imports: [

        BrowserModule,
        ReactiveFormsModule,

        //
        // Instrument the routing module:
        //
        RouterModule.forRoot([

            {

                path: 'page1',
                component: Page1Component

            }, {

                path: 'page2',
                component: Page2Component

            }, {

                //
                // Handles the default route (when there is no route in the url):
                //

                path: '',
                pathMatch: 'full',
                redirectTo: 'page1'

            }

        ])

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
