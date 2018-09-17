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
  lines: any;
  texts: any;
  text2: string;
  text3: string;

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
    this.lines = [
      {
        line1: '$50 minimum opening balance',
        line2: '$50 minimum opening balance',
        line3: '$50 minimum opening balance'
      },
      {
        line1: 'No minimum balance required',
        line2: '$1,000 minimum average daily balance to avoid a $10 monthly service charge',
        line3: 'No minimum balance required'
      },
      {
        line1: 'Non-interest bearing',
        line2: 'Interest bearing',
        line3: 'Non-interest bearing'
      }
    ];
    this.texts = [
      'Free online and mobile banking access. Remember—mobile data or text charges may apply.',
      'Bill Pay', 'Paper or electronic statements', 'Unlimited check and debit card transactions',
      'Access to 55,000+ free ATMs worldwide, including ATMs in our Allpoint ATM network.', 'Bankline, 24/7 automated telephone banking',
      'Detect Safe Browsing fraud protection software, which protects customers when they’re logged into Northwest Online Banking',
      'Northwest Visa debit card', 'Mobile pay—including Apple, Samsung and Google Pay'
    ];
    this.text2 = 'Overdraft protection: customers can link their checking account to another Northwest account—like a savings account ' +
      'or line of credit—to protect themselves from declined purchase which could result in penalties and fees. ' +
      'Additional checks: fees apply for new check orders. Pro tip—customers can order checks right through Northwest ' +
      'Online Banking, their local office or by calling the Call Center at 1-877-672-5678.';
    this.text3 = 'Full courtesy overdraft service: this service gives customers overdraft protection for checks and other ' +
      'transactions made using their checking account, like automatic bill payments and everyday debit card purchases.';
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
