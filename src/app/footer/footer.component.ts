import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links: any;
  constructor() {
    this.links = [
      'About Northwest Investor Relations', 'Visual Directory Security Center ', 'Visual Directory'
    ];
  }

  ngOnInit() {
  }

}
