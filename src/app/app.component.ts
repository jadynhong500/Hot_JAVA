import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Em24';
    page = 'home';

    location: string;
    type: string;
    status: string;
    equipment_needed: string;
    severity: string;

    incident_id: string;

    ngOnInit(): void {
    }

    public changePage(newPage: string) {
        if (newPage === 'home') {
            this.page = 'home';
        }

        if (newPage === 'report') {
            this.page = 'report';
        }

        if (newPage === 'dispatch') {
            this.page = 'dispatch';
        }

        if (newPage === 'workforce') {
            this.page = 'workforce';
        }

    }

    public makeNewReport() {}

}
