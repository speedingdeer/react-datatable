import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

// @TODO
// Replace by custom build when only introduce any changes
import 'semantic-ui-css/semantic.min.css';
import './index.css';

render(<Routes store={store}/>, document.getElementById('root'));
registerServiceWorker();
