import { Component } from '@angular/core';
import { Ediejem } from './ediejem';

@Component ({
    selector: 'ediejem',
    templateUrl: './ediejem.template.html'
})

export class EditarejemplarComponent {
    public ediejem: Ediejem;

    constructor(){
        this.ediejem = new Ediejem('');
    }


}