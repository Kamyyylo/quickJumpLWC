import { LightningElement, wire } from 'lwc';
import testChannel from "@salesforce/messageChannel/testChannel__c";
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
export default class SepTwo extends LightningElement {
    subscription;
    @wire(MessageContext)
    messageContext;
    displayIcon = false;

    connectedCallback() {
        this.subscription = subscribe(this.messageContext, testChannel, (message) => {
            this.handleMessage(message)
        }, {scope: APPLICATION_SCOPE});
    }

    handleMessage(message) {
        this.displayIcon = message.displayIcon;
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}