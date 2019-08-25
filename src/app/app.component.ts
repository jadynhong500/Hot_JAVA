import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Em24';
    page = 'home';
    subPage: string;

    location: string;
    type: string;
    status: string;
    equipment_needed: string;
    severity: string;

    selected_crew: string;
    incident_id: number;

    ngOnInit(): void {
        this.incident_id = Math.random() * 10000 + 1;
    }

    public changePage(newPage: string) {
        this.page = newPage;
    }

    public makeNewReport() {
        this.subPage = 'madeNewReport';
    }

    public assignCrew(incident, crew) {
        this.subPage = 'dispatched';
    }

    public addNewCrew() {
        this.subPage = 'newCrew';
    }

    public closePopUp() {
        this.subPage = '';
    }

}
