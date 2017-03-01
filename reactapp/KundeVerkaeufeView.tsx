import * as React from 'react';

import * as Converter from './Converter';
import { KundeState } from './KundeState';

export class KundeVerkaeufeView extends React.Component<KundeState, any> {
    constructor() {
        super();
    }

    public render() {
        let verkaeufe = this.props.kunde.verkaeufe.map(v => (
            <tr key={v.oid}>
                <td>{v.datum.toLocaleString()}</td>
                <td>{Converter.ToPzn(v.artikelPzn)}</td>
                <td>{v.artikelKurzbezeichnung}</td>
                <td className='number'>{v.menge}</td>
                <td className='number'>{v.einzelpreis}</td>
            </tr>
        ));
        return <table>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th colSpan={2}>Artikel</th>
                            <th>Menge</th>
                            <th>Einzelpreis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verkaeufe}
                    </tbody>
                </table>;
    }
}
