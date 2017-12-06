import { Component } from '@angular/core';
import { Verejem } from './verejem';

@Component ({
    selector: 'verejem',
    templateUrl: './verejem.template.html'
})

export class VerejemplarComponent {
    public Verejem: Verejem;

    constructor(){
        this.Verejem = new Verejem('');
    }
}