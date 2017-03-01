import * as React from 'react';

import { KundeState } from './KundeState';

export class KundeStammdatenView extends React.Component<KundeState, any> {
    constructor() {
        super();
    }

    public render() {
        return <table>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td><td><input type='text' defaultValue={this.props.kunde.name} /></td>
                        </tr>
                        <tr>
                            <td><label>Vorname:</label></td><td><input type='text' defaultValue={this.props.kunde.vorname} /></td>
                        </tr>
                    </tbody>
                </table>;
    }
}
