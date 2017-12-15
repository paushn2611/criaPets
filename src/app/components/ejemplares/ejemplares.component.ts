import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Ejemplar } from './ejemplar';

@Component({
    selector: 'ejemplares',
    templateUrl: './ejemplares.template.html'
})

export class EjemplaresComponent {
    public ejemplar: Ejemplar;
    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(
        private http: Http
    ) {
        this.ejemplar = new Ejemplar('');
    }

    ngOnInit(): void {
        this.http.get("https://jsonplaceholder.typicode.com/posts")
            .subscribe((data) => {
                setTimeout(() => {
                    this.data = data.json();
                    console.log(this.data);
                }, 1000);
            });
    }

}