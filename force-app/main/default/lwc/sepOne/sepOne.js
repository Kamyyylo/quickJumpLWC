import { LightningElement, wire } from 'lwc';
import testChannel from "@salesforce/messageChannel/testChannel__c";
import { publish, MessageContext } from 'lightning/messageService';

export default class SepOne extends LightningElement {
    @wire(MessageContext)
    messageContext;

    publishMessage() {
        const message = {
            displayIcon: true
        };
        publish(this.messageContext, testChannel, message);
    }
}