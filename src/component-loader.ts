import { Component } from './component';

import { getAllElementsWithAttribute } from './element-utils';

export type ComponentRegistry = {
    [componentName: string]: () => Promise<any>
};

export function loadComponents(registry: ComponentRegistry) {
    getAllElementsWithAttribute('data-component').forEach(element => {
        const componentName = element.getAttribute('data-component');
        const importFunction = registry[componentName];
        if (importFunction) {
            importFunction().then((loaded: any) => {
                const component = Object.create(loaded.default.prototype);
                const componentOptions = element.getAttribute('data-component-options');
                component.render(element, componentOptions)
            }).catch(reason => console.error(reason))
        }
    });
}