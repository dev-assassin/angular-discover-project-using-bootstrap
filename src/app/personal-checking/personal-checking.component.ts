import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-personal-checking',
  templateUrl: './personal-checking.component.html',
  styleUrls: ['./personal-checking.component.css']
})
export class PersonalCheckingComponent implements OnInit {

  text1: string;
  departments: any;
  tools: any;
  tables: any;
  rates: any;

  constructor(private router: Router) {
    this.text1 = 'At Northwest, we offer a variety of personal checking accounts to suit our customers\' needs.';
    this.departments = [
      'Deposit Product Management', 'Deposit Operations', 'Deposit Services', 'Online & Mobile Banking', 'Cards & ATMs (EFT)'
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
    this.tables = [
      {
        des: 'Interests Rate #1',
        per: '1.2%'
      },
      {
        des: 'Interests Rate #2',
        per: '2.3%'
      },
      {
        des: 'Interests Rate #3',
        per: '3.4%'
      },
      {
        des: 'Interests Rate #4',
        per: '4.5%'
      },
      {
        des: 'Interests Rate #5',
        per: '5.6%'
      },
      {
        des: 'Interests Rate #6',
        per: '6.7%'
      }
    ];
    this.rates = [
      {
        des: 'Lending Rate #1',
        per: '1.2%'
      },
      {
        des: 'Lending Rate #2',
        per: '2.3%'
      },
      {
        des: 'Lending Rate #3',
        per: '3.4%'
      },
      {
        des: 'Lending Rate #4',
        per: '4.5%'
      },
      {
        des: 'Lending Rate #5',
        per: '5.6%'
      },
      {
        des: 'Lending Rate #6',
        per: '6.7%'
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
