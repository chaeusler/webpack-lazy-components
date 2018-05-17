import { Component } from '../component';
import './puristic.css';
import Cat from './puristic.jpg';

export default class Puristic implements Component {
    render(container: HTMLElement, options?: string): void {
        container.classList.add('puristic');

        const h1 = document.createElement('h1');
        h1.innerHTML = `Hello ${options}`;
        container.appendChild(h1);

        const img = new Image();
        img.src = Cat;
        container.appendChild(img);
    }
}