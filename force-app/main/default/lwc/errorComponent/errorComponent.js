import { LightningElement } from 'lwc';

export default class ErrorComponent extends LightningElement {
    constructor() {
        super();
        throw 'oops';
    }

}