import { LightningElement } from 'lwc';

export default class DebugComponent extends LightningElement {
    name = 'Kamil';

    someObject = {
        name: 'Kamil',
        age: 27
    }

    connectedCallback() {
        debugger;
        console.log("Just Name: ", this.name);
        console.log("Object in proxy: ", this.someObject);
        console.log("Stringified Object: ", JSON.stringify(this.someObject));
        console.log("Stringified and parsed object: ", JSON.parse(JSON.stringify(this.someObject)));
    }
}