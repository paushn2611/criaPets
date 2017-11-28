import { Component } from '@angular/core';
import { Especie } from './especie';

@Component ({
    selector: 'especies',
    templateUrl: './especies.template.html'
})

export class EspeciesComponent {
    public especie: Especie;

    constructor(){
        this.especie = new Especie('');
    }


}