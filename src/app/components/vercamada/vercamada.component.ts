import { Component } from '@angular/core';
import { Vercam } from './vercam';

@Component ({
    selector: 'vercam',
    templateUrl: './vercam.template.html'
})

export class VercamadaComponent {
    public Vercam: Vercam;

    constructor(){
        this.Vercam = new Vercam('');
    }
}