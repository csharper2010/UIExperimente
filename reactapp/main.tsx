import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { KundeView } from './KundeView';

import { store$ } from './KundeStore';

let x = document.getElementById('react-app');
store$.subscribe((state) => ReactDOM.render(
    <KundeView {...state} />,
    x,
));
