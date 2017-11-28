import { Component } from '@angular/core';
import { Fclinica } from './fclinica';

@Component ({
    selector: 'fclinica',
    templateUrl: './fclinica.template.html'
})

export class FiclinicaComponent {
    public fclinica: Fclinica;

    constructor(){
        this.fclinica = new Fclinica('');
    }


}