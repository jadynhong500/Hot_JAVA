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
    incident_id: string;

    ngOnInit(): void {
    }

    public changePage(newPage: string) {
        this.page = newPage;
    }

    public makeNewReport() {

    }

    public assignCrew(incident, crew) {

    }

    public addNewCrew() {
        this.subPage = 'newCrew';
    }

    public closePopUp() {
        this.subPage = '';
    }

}
