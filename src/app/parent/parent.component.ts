import { Component } from "@angular/core";
import { Customer } from "./customer";


@Component({
  selector: 'parent-selector',
  templateUrl: './parent.component.html'
})

export class ParentComponent {
        
    //sayhello(){
    //alert("Hello World");
    //}
    customerDetail:Customer;
    customers: Customer[] = [
        { id: 1, name: 'John', email: 'john@exp.com' },
        { id: 2, name: 'google', email: 'google@exp.com' },
        { id: 3, name: 'microsoft', email: 'microsoft@exp.com' },
    ];
    logDetails(model){
    this.customerDetail=model;
    }

}