import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Em24';
  page = 'home';

  location: string;
  type: string;
  status: string;
  equipment_needed: string;
  severity: string;

  public changePage(newPage: string) {
    if(newPage === 'home') {
      this.page = 'home';
    }

    if(newPage === 'report') {
      this.page = 'report';
    }

    if(newPage === 'dispatch') {
      this.page = 'dispatch';
    }

    if(newPage === 'workforce') {
      this.page = 'workforce';
    }

  }

    public makeNewReport() {

  }

}

interface report {
    id: string;
    location: string;
    type: string;
    status: string;
    equipment_needed: string;
    severity: string;
}

interface reportMap {
    [key: string]: report;
}
