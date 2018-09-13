import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css']
})
export class CommunicationsComponent implements OnInit {

  text1: string;
  profiles: any;
  articles: any;
  customers: any;
  memos: any;
  docs: any;
  tools: any;
  events: any;
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

  constructor() {
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
    this.articles = [
      {
        img: 'assets/images/communications/article1.jpg',
        title: 'Regulation DD Compliance Exam'
      },
      {
        img: 'assets/images/communications/article2.jpg',
        title: 'J.D. Power T-shirts'
      },
      {
        img: 'assets/images/communications/article3.jpg',
        title: 'Regulation DD Compliance Exam'
      }
    ];
    this.customers = [
      {
        img: 'assets/images/communications/customer1.jpg',
        title: 'Beneficial owner business letter'
      },
      {
        img: 'assets/images/communications/customer2.jpg',
        title: 'My Northwest Checking postcard'
      },
      {
        img: 'assets/images/communications/customer3.jpg',
        title: 'Bellevue Grand Opening retail mailer'
      }
    ];
    this.memos = [
      {
        img: 'assets/images/communications/memo1.jpg',
        title: 'PMI Annual Notice'
      },
      {
        img: 'assets/images/communications/memo2.jpg',
        title: 'Call center Hours Change'
      },
      {
        img: 'assets/images/communications/memo3.jpg',
        title: 'Personal Credit Card Playbook'
      }
    ];
    this.docs = [
      'Annual Report 2018.pdf', 'Global-research-Q1-by-Gartner.pdf', 'Generic-rules.txt',
      'online checking account.doc', 'Student-Loadns-Q2/18.xls'
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
        text: 'Voice of the Customer Quarter 3 Webinar'
      },
      {
        date: 'Thursday',
        day: '22',
        month: 'November',
        text: 'Voice of the Customer Quarter 4 Webinar'
      }
    ];
  }

  ngOnInit() {
  }

}
