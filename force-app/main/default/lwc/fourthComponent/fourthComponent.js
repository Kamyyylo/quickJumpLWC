import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class FourthComponent extends NavigationMixin(LightningElement) {
    recordPageUrl;

    handleQuerySelectors() {
        const inputInnerText = this.template.querySelector('lightning-input').value;
        console.log('inputInnerText: ', inputInnerText);

        const inputInnerText2 = this.template.querySelector('[data-id="inputId"]').value;
        console.log('inputInnerText2: ', inputInnerText2);

        const inputInnerText3 = this.template.querySelector('.inputClass').value;
        console.log('inputInnerText3: ', inputInnerText3);

        this.template.querySelectorAll('lightning-input').forEach(input => {
            console.log(input.value);
        });

        const textFromRefDiv = this.refs.myDivRef;
        console.log('@@textFromRefDiv: ', textFromRefDiv.textContent)
    }

    handleNavigation() {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003WU000001b4YoYAI',
                actionName: 'view',
            },
        }).then((url) => {
            this.recordPageUrl = url;
            console.log('@@this.recordPageUrl: ', this.recordPageUrl);
        });

        
    }
}