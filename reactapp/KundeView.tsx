import * as React from 'react';

import { KundeState } from './KundeState';
import { KundeStammdatenView } from './KundeStammdatenView';
import { KundeVerkaeufeView } from './KundeVerkaeufeView';
import { Tab, Tabs } from './Tabs';

export class KundeView extends React.Component<KundeState, any> {
    constructor() {
        super();
    }

    public render() {
        let kunde = this.props.kunde;
        return (
            <div>
                <h3>{this.props.kunde.vorname} {this.props.kunde.name}</h3>
                <Tabs defaultTabIndex={0}>
                    <Tab title='Stammdaten' hotKey='S' content={
                        <KundeStammdatenView {...this.props} />
                        } />
                    <Tab title='Verkäufe' hotKey='Z' content={
                        <KundeVerkaeufeView {...this.props} />
                    } />
                </Tabs>
            </div>
        );
    }
}
