import { LightningElement, api } from 'lwc';

export default class ThirdComponent extends LightningElement {
    _coolProperty;

    @api
    get coolProperty() {
        return this._coolProperty;
    }

    set coolProperty(value) {
        this._coolProperty = value.toUpperCase();
    }
    
    constructor() {
        super();
        console.log('This is constructor');
    }
    connectedCallback() {
        console.log('This is connected callback');
    }
    renderedCallback() {
        console.log('This is rendered callback');
    }
    disconnectedCallback() {
        console.log('This is disconnected callback');
    }

    errorCallback(error, stack) {
        console.log('This is error callback from parent: ', error);
        console.log(stack);
    }
}