import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'child-selector',
  templateUrl: './child.component.html'
})


export class ChildComponent implements OnInit {

       @Input() customerDetail:any;
       constructor(){

       }
        ngOnInit(): void {
            throw new Error('Method not implemented.');
        }


  
}