import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bank-on',
  templateUrl: './bank-on.component.html',
  styleUrls: ['./bank-on.component.css']
})
export class BankOnComponent implements OnInit {

  text1: string;
  text2: string;
  imgs: any;

  constructor(private router: Router) {
    this.text1 = 'On Friday, our Oil City office received candy from a customer.';
    this.text2 = 'Manager Kim Reddinger said she was shocked when a longtime customer showed up at ' +
      'the branch bearing gifts in the form of candies for everyone. "John was sure to cover everyone\'s ' +
      'sweet tooth with this assortment!" she said as she smiled and held up the sacks of candy.';
    this.imgs = [
      'assets/images/icon-contact-message.svg', 'assets/images/icon-contact-phone.svg',
      'assets/images/icon-contact-email.svg', 'assets/images/icon-contact-video.svg'
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
