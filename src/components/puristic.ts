import { Component } from '../component';
import './puristic.css';

export default class Puristic implements Component {
    render(container: HTMLElement, options?: any): void {
        container.classList.add('puristic');

        const h1 = document.createElement('h1');
        h1.innerHTML = "Hello Puristic";

        container.appendChild(h1);
    }
}