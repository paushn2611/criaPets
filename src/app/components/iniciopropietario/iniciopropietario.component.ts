import { Component } from '@angular/core';
import { Inicioprop } from './inicioprop';

@Component ({
    selector: 'inicioprop',
    templateUrl: './inicioprop.template.html'
})

export class IniciopropietarioComponent {
    public Inicioprop: Inicioprop;

    constructor(){
        this.Inicioprop = new Inicioprop('');
    }
}