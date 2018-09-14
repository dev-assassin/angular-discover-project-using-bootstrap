import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  };
  communications: any;
  products: any;
  text1: string;
  profiles: any;
  docs: any;
  tools: any;
  events: any;

  constructor() {
    this.communications = [
      {
        img: 'assets/images/communications/article1.jpg',
        title: 'New IMF, CD, IRA-CD Playbook Released'
      },
      {
        img: 'assets/images/communications/article2.jpg',
        title: 'We\'ve increased CD Rates'
      },
      {
        img: 'assets/images/communications/article3.jpg',
        title: 'Just released: MyNorthwest campaign'
      }
    ];
    this.products = [
      {
        img: 'assets/images/communications/customer1.jpg',
        title: 'Personal Checking'
      },
      {
        img: 'assets/images/communications/customer2.jpg',
        title: 'IRAs'
      },
      {
        img: 'assets/images/communications/customer3.jpg',
        title: 'CDs'
      }
    ];
    this.text1 = 'We manage the internal and external messaging for the bank. Anything from copywriting, Bank...';
    this.profiles = [
      {
        img: 'assets/images/communications/Jane.jpg',
        name: 'Jane Doe',
        role: 'Marketing Directory',
        imgs: [
          'assets/images/icon-contact-message.svg', 'assets/images/icon-contact-phone.svg',
          'assets/images/icon-contact-email.svg', 'assets/images/icon-contact-video.svg'
        ]
      },
      {
        img: 'assets/images/communications/Jennifer.jpg',
        name: 'Jennifer Jones',
        role: 'Business Developer',
        imgs: [
          'assets/images/icon-contact-message.svg', 'assets/images/icon-contact-phone.svg',
          'assets/images/icon-contact-email.svg', 'assets/images/icon-contact-video.svg'
        ]
      }
    ];
    this.docs = [
      'Retail Deposits Playbook', 'Basic Checking Playbook', 'FDIC Guide to Deposit Insurance Rules'
    ];
    this.tools = [
      {
        img: 'assets/images/icons/icon-tools-rates.svg',
        text: 'Rates'
      },
      {
        img: 'assets/images/icons/icon-tools-manuals.svg',
        text: 'Manuals & Knowledge'
      },
      {
        img: 'assets/images/icons/icon-tools-policies.svg',
        text: 'Policies'
      },
      {
        img: 'assets/images/icons/icon-tools-account.svg',
        text: 'Account Processing'
      },
      {
        img: 'assets/images/icons/icon-tools-operations.svg',
        text: 'Northwest Operations'
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        text: 'Custom Tool'
      }
    ];
    this.events = [
      {
        date: 'Wednesday',
        day: '19',
        month: 'October',
        text: 'IRA, CD, IRA CD Playbook Review Call'
      },
      {
        date: 'Thursday',
        day: '22',
        month: 'November',
        text: 'Northwest Region Product Knowledge Training'
      }
    ];
  }

  ngOnInit() {
  }

}
