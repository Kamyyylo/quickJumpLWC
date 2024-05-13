import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    parentVariable = "Input For Child";
    variableFromChild;

    changeChildsValue() {
        this.template.querySelectorAll('c-child-comp').forEach(child => child.changeValue('Changed Value'));
    }

    handleChildEvent(event) {
        this.variableFromChild = event.detail;
    }
}