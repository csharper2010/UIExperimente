import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { KundeStammdatenComponent } from './kunde-stammdaten';
import { KundeVerkaeufeComponent } from './kunde-verkaeufe';
import { KundeComponent } from './kunde.component';
import { PznPipe } from './pzn-pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        PznPipe,
        KundeComponent,
        TabComponent,
        TabsComponent,
        KundeStammdatenComponent,
        KundeVerkaeufeComponent,
    ],
    bootstrap: [ KundeComponent ],
})
export class NgappModule { }