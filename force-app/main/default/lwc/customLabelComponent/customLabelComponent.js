import { LightningElement } from 'lwc';
import someLabel from "@salesforce/label/c.SomeLabel";
export default class CustomLabelComponent extends LightningElement {
    labels = {
        someLabel
    };
}