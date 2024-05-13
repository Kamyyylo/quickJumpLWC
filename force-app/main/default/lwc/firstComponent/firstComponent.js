import { LightningElement, wire, api, track } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import getAccounts from "@salesforce/apex/FirstComponentController.getAccounts";

export default class FirstComponent extends LightningElement {
    // @wire(getRecord, {recordId: "001WU000005EjLqYAK", fields: [ACCOUNT_NAME]})
    // record;
    @api testApi;
    @api recordId;
    coolPropertyToPass = '';
    @track testObject = {
        country : {
            name: 'Poland',
            currency: 'PLN'
        }
    }

    @track testArray = [1,2,3]
    isThird = true;
    data;
    columns =  [
        { label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name' },
        { label: 'Account Number', fieldName: 'AccountNumber' }
    ];

    @wire(getAccounts)
    accounts(result) {
        if(result.data) {
            this.data = result.data;
        }
    }

    connectedCallback() {
        // const account = getAccount({Id: '001WU000005EjLqYAK'});

        // console.log('@@account: ', account); 
        console.log('@@testApi: ', this.testApi);
        console.log('@@recordId: ', this.recordId);
    }

    handleClick() {
        this.testObject.country.name = 'England';
        this.coolPropertyToPass =  'England';
        console.log('@@testObject Country: ', this.testObject.country.name);
    }

    handleThirdComponent() {
        this.isThird = !this.isThird;
    }
}