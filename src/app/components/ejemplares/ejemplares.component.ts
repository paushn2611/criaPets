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
    dtOptions: DataTables.Settings = {};

    constructor(
        private http: Http
    ) {
        this.ejemplar = new Ejemplar('');
    }

    ngOnInit(): void {
        /* this.http.get("https://jsonplaceholder.typicode.com/posts")
            .subscribe((data) => {
                setTimeout(() => {
                    this.data = data.json();
                    console.log(this.data);
                }, 1000);
            });

        this.dtOptions = {
            pagingType: 'full_numbers'
        }; */
        this.dtOptions = {
            ajax: 'data/data.json',
            columns: [{
                title: 'ID',
                data: 'id'
            }, {
                title: 'First name',
                data: 'firstName'
            }, {
                title: 'Last name',
                data: 'lastName'
            }]
        };
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

}