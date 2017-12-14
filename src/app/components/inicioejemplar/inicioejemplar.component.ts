import { Component } from '@angular/core';
import { Inicioejem } from './inicioejem';

@Component ({
    selector: 'inicioejem',
    templateUrl: './inicioejem.template.html'
})

export class InicioejemplarComponent {
    public Inicioejem: Inicioejem;

    constructor(){
        this.Inicioejem = new Inicioejem('');
    }
}