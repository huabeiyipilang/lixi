import { Component, OnInit } from '@angular/core';
declare var calendar: any;

const BIRTHDAY = 1478348880000;
const A_DAY = 24 * 60 * 60 * 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  //生日Date对象
  birthdayDate: Date;
  birthdayDateStart: Date;
  //农历生日对象
  calendarInfos: any;

  ngOnInit() {
    this.birthdayDate = new Date();
    this.birthdayDate.setTime(BIRTHDAY);

    this.birthdayDateStart = new Date();
    this.birthdayDateStart.setTime(BIRTHDAY);
    this.birthdayDateStart.setHours(0);
    this.birthdayDateStart.setMinutes(0);
    this.birthdayDateStart.setMilliseconds(0);

    this.calendarInfos = calendar.solar2lunar(this.birthdayDate.getFullYear(), this.birthdayDate.getMonth(), this.birthdayDate.getDay());
    console.log('ngOnInit:' + this.calendarInfos);
  }

  /**
   * 格式生日
   */
  getFormatBirthday() {
    return this.birthdayDate.getFullYear() + "年" + this.birthdayDate.getMonth() + "月" + this.birthdayDate.getDay() + "日"
      + " " + this.birthdayDate.getHours() + ":" + this.birthdayDate.getMinutes();
  }

  /**
   * 出生天数
   */
  getDaysAfterBirthday() {
    return Math.floor((new Date().getTime() - this.birthdayDateStart.getTime() + A_DAY) / A_DAY);
  }

  /**
   * 距下一个生日还有多少天
   */
  getDaysBeforeNextBirthday() {
    let currentDate = new Date();
    let currentLunar = calendar.solar2lunar(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay());
    return this.calendarInfos.Animal;
  }
}
