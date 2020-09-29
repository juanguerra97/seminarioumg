import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countDownDate: number = new Date('Oct 03, 2020 12:00:00').getTime();
  public days = '00';
  public hours = '00';
  public minutes = '00';
  public seconds = '00';
  public enableAccess = false;
  public countDownExpired = false;

  constructor() {
    this.initDaysCountDown();
  }

  ngOnInit(): void {
  }

  public initDaysCountDown(): void {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countDownDate - now;

      if (distance < 0) {
        this.enableAccess = true;
        this.countDownExpired = true;
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        clearInterval(interval);
      } else {

        this.days = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
        this.hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.minutes = ('0' + min).slice(-2);
        if (min < 5) {
          this.enableAccess = true;
        }
        this.seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
      }

    }, 1000);
  }

  public onIrAWebinar(): void {

  }

}
