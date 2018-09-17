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
  images: any;
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView: 4,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  };

  constructor(private router: Router) {
    this.text1 = 'On Friday, our Oil City office received candy from a customer.';
    this.text2 = 'Manager Kim Reddinger said she was shocked when a longtime customer showed up at ' +
      'the branch bearing gifts in the form of candies for everyone. "John was sure to cover everyone\'s ' +
      'sweet tooth with this assortment!" she said as she smiled and held up the sacks of candy.';
    this.imgs = [
      'assets/images/icon-contact-message.svg', 'assets/images/icon-contact-phone.svg',
      'assets/images/icon-contact-email.svg', 'assets/images/icon-contact-video.svg'
    ];
    this.images = [
      {
        title: 'Northwest',
        cards: [
          {
            img: 'assets/images/bank-on/northwest1.jpg',
            text: 'The Best Bank Customer Service Story I Ever Heard'
          },
          {
            img: 'assets/images/bank-on/northwest2.jpg',
            text: 'The Larger Number'
          },
          {
            img: 'assets/images/bank-on/northwest3.jpg',
            text: 'A Cross-Selling Tactic That Brings in New Customers'
          },
          {
            img: 'assets/images/bank-on/northwest4.jpg',
            text: 'A Savings Account Puzzle'
          }
        ]
      },
      {
        title: 'Our People',
        cards: [
          {
            img: 'assets/images/bank-on/people1.jpg',
            text: 'Anne Marie Adams'
          },
          {
            img: 'assets/images/bank-on/people2.jpg',
            text: 'Jane Doe'
          },
          {
            img: 'assets/images/bank-on/people3.jpg',
            text: 'John Smith'
          },
          {
            img: 'assets/images/bank-on/people4.jpg',
            text: 'Peter Johnson'
          }
        ]
      },
      {
        title: 'Community Involvement',
        cards: [
          {
            img: 'assets/images/bank-on/community1.jpg',
            text: 'Maximizing the On-Boarding Experience'
          },
          {
            img: 'assets/images/bank-on/community2.jpg',
            text: 'Should Banks Even Bother Using Social Media?'
          },
          {
            img: 'assets/images/bank-on/community3.jpg',
            text: 'Opinionated, insightful, useful and funny',
            des: 'Manager Kim Reddinger said she was shocked when a longtime customer showed up at the branch bearing... gifts',
            read: 'Read more'
          },
          {
            img: 'assets/images/bank-on/community4.jpg',
            text: 'You Can’t Market Financial Services To Women'
          }
        ]
      },
      {
        title: 'In the News',
        cards: [
          {
            img: 'assets/images/bank-on/news1.jpg',
            text: 'The Best Bank Customer Service Story I Ever Heard'
          },
          {
            img: 'assets/images/bank-on/news2.jpg',
            text: 'The Larger Number'
          },
          {
            img: 'assets/images/bank-on/news3.jpg',
            text: 'A Cross-Selling Tactic That Brings in New Customers'
          },
          {
            img: 'assets/images/bank-on/news4.jpg',
            text: 'A Savings Account Puzzle'
          }
        ]
      }
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
