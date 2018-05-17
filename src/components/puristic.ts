import { Component } from '../component';
import './puristic.css';
import Icon from './puristic.jpg';

export default class Puristic implements Component {
    render(container: HTMLElement, options?: any): void {
        container.classList.add('puristic');

        const h1 = document.createElement('h1');
        h1.innerHTML = "Hello Puristic";

        const img = new Image();
        img.src = Icon;

        container.appendChild(h1);
        container.appendChild(img);
    }
}