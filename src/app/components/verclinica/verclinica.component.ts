import { Component } from '@angular/core';
import { Verclin } from './verclin';

@Component ({
    selector: 'verclin',
    templateUrl: './verclin.template.html'
})

export class VerclinicaComponent {
    public Verclin: Verclin;

    constructor(){
        this.Verclin = new Verclin('');
    }
}