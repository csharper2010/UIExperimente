import * as React from 'react';

import { KundeService, Kunde } from '../model/Kunde'
import { KundeState } from './KundeState'
import { KundeStammdatenView } from './KundeStammdatenView'
import { KundeVerkaeufeView } from './KundeVerkaeufeView'
import { Tab, Tabs } from './Tabs'

export class KundeView extends React.Component<any, KundeState> {
    constructor() {
        super();
        this.state = { kunde: new KundeService().getKunde() };
    }

    public render() {
        let kunde = this.state.kunde;
        return (
            <Tabs>
                <Tab title="Stammdaten" content={
                    <KundeStammdatenView kunde={this.state.kunde} />
                    } />
                <Tab title="Verkäufe" isActive={true} content={
                    <KundeVerkaeufeView kunde={this.state.kunde} />
                } />
            </Tabs>
        );
    }
}
