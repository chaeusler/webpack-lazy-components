import {getAllElementsWithAttribute} from './element-utils';

getAllElementsWithAttribute('data-component').forEach(element => {
    console.log(element);
});