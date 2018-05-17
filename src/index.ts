import { ComponentRegistry, loadComponents } from './component-loader';

import './theme.css'

const componentRegistry: ComponentRegistry = {
    'puristic': () => import('./components/puristic')
};

loadComponents(componentRegistry);
