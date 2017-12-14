import { Component } from '@angular/core';
import { Fcamada } from './fcamada';

@Component ({
    selector: 'fcamada',
    templateUrl: './fcamada.template.html'
})

export class FicamadaComponent {
    public fcamada: Fcamada;

    constructor(){
        this.fcamada = new Fcamada('');
    }


}