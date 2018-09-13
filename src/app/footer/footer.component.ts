import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links: any;
  imgs: any;

  constructor() {
    this.links = [
      'About Northwest Investor Relations', 'Visual Directory Security Center '
    ];
    this.imgs = [
      {
        pass: 'assets/images/icon-contact-message.svg',
        alt: 'contact-message'
      },
      {
        pass: 'assets/images/icon-contact-phone.svg',
        alt: 'contact-phone'
      },
      {
        pass: 'assets/images/icon-contact-email.svg',
        alt: 'contact-email'
      },
      {
        pass: 'assets/images/icon-contact-video.svg',
        alt: 'contact-video'
      }
    ];
  }

  ngOnInit() {
  }

}
