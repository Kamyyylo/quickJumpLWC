import { LightningElement } from 'lwc';

export default class DynamicCaller extends LightningElement {
    componentConstructor;
    childProps = {
        name: 'Kamil',
        age: 27
    }

    isChange = false;

    loadComponent() {
        if(!this.isChange) {
            import("c/componentToCall")
            .then(({ default: ctor }) => (this.componentConstructor = ctor))
            .catch((err) => console.log("Error importing component"));
        } else {
            import("c/componentToCallElse")
            .then(({ default: ctor }) => (this.componentConstructor = ctor))
            .catch((err) => console.log("Error importing component"));
        }
        
    }

    connectedCallback() {
        this.loadComponent();

    }

    changeComponent() {
        this.isChange = !this.isChange;
        this.loadComponent();
    }
}