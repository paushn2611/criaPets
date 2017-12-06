import { Component } from '@angular/core';
import { Inicioser } from './inicioser';

@Component ({
    selector: 'inicioser',
    templateUrl: './inicioser.template.html'
})

export class InicioservicioComponent {
    public Inicioser: Inicioser;

    constructor(){
        this.Inicioser = new Inicioser('');
    }
}