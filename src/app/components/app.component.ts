import {Component} from '@angular/core';

@Component({
    selector: 'app-main',
    template: `        
        <span green-text>A directive changes color to green</span>
        <exclamatory></exclamatory>
        <posts></posts>
    `,
    styles: ['']
})

export class AppComponent {    
}