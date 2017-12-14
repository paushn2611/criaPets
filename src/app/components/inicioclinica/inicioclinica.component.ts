import { Component } from '@angular/core';
import { Inicioclin } from './inicioclin';

@Component ({
    selector: 'inicioclin',
    templateUrl: './inicioclin.template.html'
})

export class InicioclinicaComponent {
    public Inicioclin: Inicioclin;

    constructor(){
        this.Inicioclin = new Inicioclin('');
    }
}