import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

render(<Routes store={store}/>, document.getElementById('root'));
registerServiceWorker();
