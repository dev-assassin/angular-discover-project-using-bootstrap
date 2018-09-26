import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  manuals: any;

  constructor(private router: Router) {
    this.manuals = [
      {
        img: 'assets/images/search/linklist-manual.svg',
        text: 'Northwest at Work'
      },
      {
        img: 'assets/images/search/linklist-manual.svg',
        text: 'Annual Report 2018.pdf'
      },
      {
        img: 'assets/images/search/linklist-manual.svg',
        text: 'Working with CRM v1.18 02.02.2018'
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
