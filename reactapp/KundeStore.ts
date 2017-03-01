import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { KundeService, Kunde } from '../model/Kunde';
import { KundeState } from './KundeState';

export const action$ = new Subject<Action>();

function getInitialState(): KundeState {
    return { kunde: new KundeService().getKunde() };
};

const reducer = (state: KundeState, action: Action): KundeState => {
    if (action instanceof SetNameAction) {
        let kunde = state.kunde;
        return Object.assign({}, state, { kunde: { ...kunde, ...action }});
    }
    if (action instanceof SetVornameAction) {
        let kunde = state.kunde;
        return Object.assign({}, state, { kunde: { ...kunde, ...action }});
    }
    const _exhaustiveCheck: never = action;
    return _exhaustiveCheck;
};

export class SetNameAction {
    constructor(public name: string) {}
}

export class SetVornameAction {
    constructor(public vorname: string) {}
}

type Action = SetNameAction | SetVornameAction;

let init = getInitialState();
export const store$ = action$.scan(reducer, init).startWith(init);
