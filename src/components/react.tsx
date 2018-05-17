import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Component} from '../component';

const ReactComponent = (props: {name: string}) => <h1>Hello {props.name}</h1>

export default class ReactRenderer implements Component {
    render(container: HTMLElement, options?: string): void {
        ReactDOM.render(
            <ReactComponent name={options}/>,
            container
        )
    }
}

