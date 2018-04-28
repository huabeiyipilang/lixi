import { Component, OnInit } from '@angular/core';
declare var calendar: any;

const BIRTHDAY = 1478348880000;
const A_DAY = 24 * 60 * 60 * 1000;
const NONGLI_BIRTHDAYS = ["2016-11-05"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  birthdayDate: Date;
  calendarInfos: any;

  ngOnInit() {
    this.birthdayDate = new Date();
    this.birthdayDate.setTime(BIRTHDAY);
    this.calendarInfos = calendar.solar2lunar(this.birthdayDate.getFullYear(), this.birthdayDate.getMonth(), this.birthdayDate.getDay());
    console.log('ngOnInit:' + this.calendarInfos);
  }

  getFormatBirthday() {
    return this.birthdayDate.toLocaleString();
  }

  getDaysAfterBirthday() {
    return Math.floor((new Date().getTime() - BIRTHDAY + A_DAY) / A_DAY);
  }

  getDaysBeforeNextBirthday() {
    return this.calendarInfos.Animal;
  }
}
