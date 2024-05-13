import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api parentVariable;

    @api changeValue(parentVar) {
        this.parentVariable = parentVar;
    }

    sendToParent() {
        this.dispatchEvent(new CustomEvent("childevent", {
            detail: 'value from child'
        }));
    }
}