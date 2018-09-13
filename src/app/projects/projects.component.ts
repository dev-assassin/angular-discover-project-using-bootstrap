import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  };
  cards: any;

  constructor() {
    this.projects = [
      'My assignments (61)', 'My Recent Activity', 'My Schedule'
    ];
    this.cards = [
      {
        projects: [
          {
            title: '2017 Corporate ad campaign',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          },
          {
            title: 'Banks and the delusion',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          },
          {
            title: 'Branch of the future',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          }
        ]
      },
      {
        projects: [
          {
            title: 'Banking For a Better World',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          },
          {
            title: 'Banking For Solutions',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          },
          {
            title: 'Financial Services Club',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          }
        ]
      },
      {
        projects: [
          {
            title: 'Sales and Service Culture',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          },
          {
            title: 'Bank’s the Remodel',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          },
          {
            title: 'New iPhone Passbook Wallet',
            text: 'Get to know our new ad campaign. Because soon, you’ll be seeing it everywhere.',
            images: [
              'assets/images/projects/Jane.jpg', 'assets/images/projects/Jennifer.jpg', 'assets/images/projects/guy1.png',
              'assets/images/projects/guy2.png'
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
