import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };
  text1: string;
  text2: string;
  lists: any;

  constructor() {
    this.text1 = 'On Friday, our Oil City office received candy from a customer.';
    this.text2 = 'Manager Kim Reddinger said she was shocked when a longtime customer showed up at the branch bearing ' +
      'gifts in the form of candies for everyone. "John was sure to cover everyone\'s sweet tooth with this assortment!" ' +
      'she said as she smiled and held up the sacks of candy.';
    this.lists = [
      {
        title: 'Here\'s what\'s new with Beneficial Owner',
        text: 'In 2016, the government\'s Treasury Department\'s Financial Crimes Enforcement Network (FinCEN) issued a rule ' +
          'that will require all banks and credit unions to obtain...'
      },
      {
        title: 'An update to the CD IMF Playbook.',
        text: 'We\'ve increased deposit rates again on our CD and IMF specials to remain competitive in all our markets.'
      },
      {
        title: 'Union Community Bank Acquisition Resource Center',
        text: 'We\'re pleased to announce that we will acquire Union Community Bank, headquartered in Lancaster County, Pennsylvania. ' +
          'The conversion is expected to take place the first quarter of 2019.'
      }
    ];
  }

  ngOnInit() {
  }

}
