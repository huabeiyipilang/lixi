import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from "@angular/common/http";

declare var calendar: any;

const BIRTHDAY = 1478348880000;
const A_DAY = 24 * 60 * 60 * 1000;
const DEBUG = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  respObject: any;
  constructor(private http: HttpClient, private router: ActivatedRoute) {
  }
  ngOnInit() {
    this.router
      .queryParams
      .subscribe(queryParams => {
        if (!queryParams['name'] || !queryParams['date']) {
          return;
        }
        let urlParam = new HttpParams().set('name', queryParams['name']).set('date', queryParams['date']);
        let url: string = DEBUG ? 'http://127.0.0.1:8080/bithdayinfo' : 'http://176.122.189.169:28789/lixi/bithdayinfo';
        this.http.get(url, { params: urlParam })
          .subscribe(data => {
            this.respObject = data;
            console.log(this.respObject.name);
            console.log(this.respObject);
          });
      });
  }
}
