import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text1: string;
  employees: any;
  services: any;
  regions: any;
  departments: any;
  visits: any;
  reports: any;
  teams: any;
  lists: any;
  text2: string;
  personals: any;
  channels: any;
  resources: any;
  tables: any;
  text3: string;
  bpersonals: any;
  brendings: any;
  deliveries: any;
  rates: any;

  constructor() {
    this.text1 = 'For 120 years, people have come to us with dreams and ambitions. Sometimes, the solutions aren’t ' +
      'so obvious or easy. Sometimes, we have to work a little harder to find the best answer and achieve success.';
    this.employees = [
      'HR Web Portal', 'BVS Training', 'Visual Directory', 'Facilities'
    ];
    this.services = [
      'Facilities requests', 'Northwest Online Banking', 'Retirement plan access', 'Mailroom'
    ];
    this.regions = [
      {
        texts: [
          'Central', 'Eastern', 'Erie', 'New York'
        ]
      },
      {
        texts: [
          'Northwest', 'Ohio', 'Southwest'
        ]
      }
    ];
    this.departments = [
      {
        titles: [
          {
            title: 'Compliance',
            texts: [
              'Bank Secrecy Act', 'Compliance', 'Community Reinvestment Act', 'Fair Lending', 'Resolution'
            ]
          },
          {
            title: 'Credit',
            texts: [
              'Appraising', 'Collections', 'Credit Administration', 'Special Assets'
            ]
          },
          {
            title: 'Delivery Channels',
            texts: [
              'ACH', 'Check Servicing', 'EFT (ATMs and cards)', 'Online & Mobile Banking'
            ]
          }
        ]
      },
      {
        titles: [
          {
            title: 'Deposits',
            texts: [
              'Cash Management Support', 'Deposit Product Manangement', 'Deposit Product Support', 'Deposit Services',
              'IRA/HSA Services', 'Item Processing', 'Reporting Services'
            ]
          },
          {
            title: 'Finance & Risk',
            texts: [
              'Accounting', 'Internal Audit', 'Loan Review', 'Risk Management', 'Shareholder Relations'
            ]
          },
          {
            title: 'Information Systems',
            texts: [
              'Information Systems', 'Process Improvement'
            ]
          }
        ]
      },
      {
        titles: [
          {
            title: 'Investments, Insurance & Trust',
            texts: [
              'Northwest Advisors', 'Northwest Insurance Services', 'Trust Services'
            ]
          },
          {
            title: 'Personal Loans',
            texts: [
              'Consumer Lending', 'Mortgage & Equity Lending', 'Wholesale Lending'
            ]
          },
          {
            title: 'Business Loans',
            texts: [
              'Commercial Lending', 'Small Business Lending'
            ]
          },
          {
            title: 'Indirect Landing'
          },
          {
            title: 'Operations & Servicing',
            texts: [
              'Commercial Loan Operations', 'Loan Servicing', 'Loan Origination Systems'
            ]
          }
        ]
      },
      {
        titles: [
          {
            title: 'Security',
            texts: [
              'Fraud', 'Information Security', 'Physical Security'
            ]
          },
          {
            title: 'Support Services',
            texts: [
              'Branch Operations', 'Centralized Imaging', 'Customer Service', 'Education & Training',
              'Human Resources', 'Office Services', 'Marketing & Communications', 'Purchasing',
              'Research', 'Return Mail', 'Statement Prep', 'Production', 'Revenue Administration'
            ]
          }
        ]
      }
    ];
    this.visits = [
      'Human Resources', 'Account Processing', 'Production & Revenue', 'Health and Wellness', 'Human Resources',
      'Account Processing', 'Production & Revenue'
    ];
    this.reports = [
      {
        class: 'fa fa-file-pdf-o bottom',
        text: 'Annual Report 2018.pdf'
      },
      {
        class: 'fa fa-file-pdf-o bottom',
        text: 'Global-research-Q1-by-Gartner.pdf'
      },
      {
        class: 'fa fa-file-text-o bottom',
        text: 'Generic-rules.txt'
      },
      {
        class: 'fa fa-file-word-o bottom',
        text: 'online checking account.doc'
      },
      {
        class: 'fa fa-file-excel-o bottom',
        text: 'Student-Loadns-Q2/18.xls'
      }
    ];
    this.teams = [
      {
        title: 'My Teams',
        texts: [
          'Human Resources', 'Account Processing', 'Production & Revenue', 'Health and Wellness'
        ]
      },
      {
        title: 'My Projects',
        texts: [
          'Human Resources', 'Account Processing', 'Production & Revenue', 'Health and Wellness'
        ]
      }
    ];
    this.lists = [
      {
        titles: [
          'HR Web Portal', 'BVS Training', 'Northwest Online Banking', 'My Custom Link'
        ]
      },
      {
        titles: [
          'HR Web Portal', 'BVS Training', 'Northwest Online Banking', 'My Custom Link'
        ]
      }
    ];
    this.text2 = 'At Northwest, we offer a variety of checking and savings accounts and business cash management ' +
      'services with easy-to-understand terms and the secure, convenient access our customers are looking for.';
    this.personals = [
      {
        title: 'Personal',
        texts: [
          'Checking', 'Savings', 'CDs', 'IRAs and HSAs', 'Safe Deposit Boxes'
        ]
      },
      {
        title: 'Business',
        texts: [
          'EDI Reporting', 'Positive Pay', 'Wire Transfers', 'Lockbox Services', 'Safe Deposit Boxes'
        ]
      }
    ];
    this.channels = [
      'Online & Mobile Banking', 'Cards & ATMs', 'Bankline', 'Checks'
    ];
    this.resources = [
      'Accounts Processing Manual', 'Knowledge Bases', 'Operations Manual', 'Policies & Procedures'
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
    this.text3 = 'Whether it\'s a new home or business, we can help make out customers\' dreams a reality.';
    this.bpersonals = [
      'Mortgage', 'Home Equity', 'Personal Loans', 'Credit Cards'
    ];
    this.brendings = [
      {
        title: 'Business',
        texts: [
          'Commercial Loans', 'Small Business Loans', 'Credit Cards'
        ]
      },
      {
        title: 'Indirect Lending',
        texts: [
          'Indirect Lending'
        ]
      }
    ];
    this.deliveries = [
      'Online & Mobile Banking', 'Bankline'
    ];
  }

  ngOnInit() {
    console.log(this.departments[0].titles[0].texts, '---');
  }

}
