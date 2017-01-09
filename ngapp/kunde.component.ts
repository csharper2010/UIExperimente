import { Component, Input } from '@angular/core';

import { KundeService } from '../model/Kunde'

@Component({
    moduleId: module.id,
    selector: 'ng-kunde',
    templateUrl: 'kunde.component.html'
})
export class KundeComponent {
    title = 'Kunde';
    kunde = new KundeService().getKunde();
}