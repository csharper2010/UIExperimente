import { Component, Input } from '@angular/core';

import { Kunde } from '../model/Kunde'

@Component({
    moduleId: module.id,
    selector: 'ng-kunde-stammdaten',
    templateUrl: 'kunde-stammdaten.component.html'
})
export class KundeStammdatenComponent {
    @Input()
    kunde: Kunde;
}