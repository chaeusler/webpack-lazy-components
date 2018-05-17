import { ComponentRegistry, loadComponents } from './component-loader';

import './theme.css'

const componentRegistry: ComponentRegistry = {
    'puristic': () => import('./components/puristic'),
    'react': () => import('./components/react')
};

loadComponents(componentRegistry);
