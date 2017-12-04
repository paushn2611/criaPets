import { Component } from '@angular/core';
import { Fservicios } from './fservicios';

@Component ({
    selector: 'fservicios',
    templateUrl: './fservicios.template.html'
})

export class FiserviciosComponent {
    public fservicios: Fservicios;

    constructor(){
        this.fservicios = new Fservicios('');
    }
}