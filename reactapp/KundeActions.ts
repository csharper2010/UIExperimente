import * as KundeStore from './KundeStore';

export function setName(name: string) { KundeStore.action$.next(new KundeStore.SetNameAction(name)); };
export function setVorname(vorname: string) { KundeStore.action$.next(new KundeStore.SetVornameAction(vorname)); };
