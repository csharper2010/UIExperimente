import * as React from 'react';

import { KundeState } from './KundeState';
import * as KundeActions from './KundeActions';

export class KundeStammdatenView extends React.Component<KundeState, any> {
    constructor() {
        super();
    }

    public render() {
        return <table>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type='text' value={this.props.kunde.name} onChange={ event => KundeActions.setName(event.target.value) } /></td>
                        </tr>
                        <tr>
                            <td><label>Vorname:</label></td>
                            <td><input type='text' value={this.props.kunde.vorname} onChange={ event => KundeActions.setVorname(event.target.value) } /></td>
                        </tr>
                    </tbody>
                </table>;
    }
}
