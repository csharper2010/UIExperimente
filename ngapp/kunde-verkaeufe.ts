import { Component, Input } from '@angular/core';

import { Kunde } from '../model/Kunde';

@Component({
    moduleId: module.id,
    selector: 'ng-kunde-verkaeufe',
    templateUrl: 'kunde-verkaeufe.component.html'
})
export class KundeVerkaeufeComponent {
    @Input()
    kunde: Kunde;
}