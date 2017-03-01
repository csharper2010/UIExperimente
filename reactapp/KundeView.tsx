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
                <Tabs>
                    <Tab title='Stammdaten' hotKey='S' content={
                        <KundeStammdatenView kunde={this.props.kunde} />
                        } />
                    <Tab title='Verkäufe' hotKey='Z' isActive={true} content={
                        <KundeVerkaeufeView kunde={this.props.kunde} />
                    } />
                </Tabs>
            </div>
        );
    }
}
