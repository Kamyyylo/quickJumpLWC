import { LightningElement, api } from 'lwc';

export default class SecondComponent extends LightningElement {
    @api secondInput;
    _coolProperty;

    isIf = false;
    isElseIf = false;

    connectedCallback() {
        this.coolProperty
    }

    handleIf() {
        this.isIf = !this.isIf;
    }

    handleElseIf() {
        this.isElseIf = !this.isElseIf;
    }
}