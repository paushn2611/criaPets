import { Component } from '@angular/core';
import { Verprop } from './verprop';

@Component ({
    selector: 'verprop',
    templateUrl: './verprop.template.html'
})

export class VerpropietarioComponent {
    public Verprop: Verprop;

    constructor(){
        this.Verprop = new Verprop('');
    }
}