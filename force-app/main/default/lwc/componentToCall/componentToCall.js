import { LightningElement, api } from 'lwc';

export default class ComponentToCall extends LightningElement {
    @api name;
    @api age;
}