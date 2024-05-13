import { LightningElement } from 'lwc';
import SALESFORCE_CLOUD from "@salesforce/resourceUrl/SalesforceCloud";
export default class StaticResourceComponent extends LightningElement {

    salesforceCloud = SALESFORCE_CLOUD;
}