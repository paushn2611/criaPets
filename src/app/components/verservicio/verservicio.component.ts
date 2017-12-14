import { Component } from '@angular/core';
import { Verserv } from './verserv';

@Component ({
    selector: 'verserv',
    templateUrl: './verserv.template.html'
})

export class VerservicioComponent {
    public Verserv: Verserv;

    constructor(){
        this.Verserv = new Verserv('');
    }
}