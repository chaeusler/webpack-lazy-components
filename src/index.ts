import { ComponentRegistry, loadComponents } from './component-loader';

const componentRegistry: ComponentRegistry = {
    'puristic': () => import('./components/puristic')
};

loadComponents(componentRegistry);
