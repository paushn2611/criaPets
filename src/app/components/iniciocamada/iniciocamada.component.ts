import { Component } from '@angular/core';
import { Iniciocam } from './iniciocam';

@Component ({
    selector: 'iniciocam',
    templateUrl: './iniciocam.template.html'
})

export class IniciocamadaComponent {
    public Iniciocam: Iniciocam;

    constructor(){
        this.Iniciocam = new Iniciocam('');
    }
}