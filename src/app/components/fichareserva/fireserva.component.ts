import { Component } from '@angular/core';
import { Freserva } from './freserva';

@Component ({
    selector: 'freserva',
    templateUrl: './freserva.template.html'
})

export class FireservaComponent {
    public freserva: Freserva;

    constructor(){
        this.freserva = new Freserva('');
    }


}