import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  businesses: any;
  channels: any;
  resources: any;
  tables: any;
  text3: string;
  bpersonals: any;
  brendings: any;
  indirects: any;
  deliveries: any;
  tools: any;
  rates: any;
  advisors: any;
  invests: any;
  thirds: any;
  text4: string;
  text5: string;
  insures: any;
  lasts: any;
  svgs: any;
  projects: any;
  text6: string;
  iconsvgs: any;
  text7: string;
  sptools: any;
  text8: string;
  groups: any;
  text9: string;
  suglinks: any;
  searchModals: any;
  showHidden1: boolean;
  showHidden2: boolean;
  showHidden3: boolean;
  showHidden4: boolean;
  showHidden5: boolean;
  showHidden6: boolean;
  showHidden7: boolean;

  constructor(private router: Router) {
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
            route: '/home/marketing/communications',
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
            route: '/home/departments/deposit',
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
        text: 'Scorecard'
      },
      {
        class: 'fa fa-file-pdf-o bottom',
        text: 'Monthly expense report'
      },
      {
        class: 'fa fa-file-text-o bottom',
        text: 'Services per Household'
      },
      {
        class: 'fa fa-file-word-o bottom',
        text: 'Loan Origination'
      }
    ];
    this.teams = [
      'Senior Loan Committee', 'Credit Committee', 'BCP', 'Compliance Management Committees'
    ];
    this.projects = [
      'Union Community Bank Acquisition', 'Beneficial Ownership', 'Discover Refresh', 'Branch Consolidations'
    ];
    this.lists = [
      {
        titles: [
          {
            text: 'HR Web Portal'
          },
          {
            text: 'BVS Training'
          },
          {
            text: 'Northwest Online Banking'
          },
          {
            text: 'My Custom Link'
          }
        ]
      },
      {
        titles: [
          {
            text: 'My Custom Link'
          },
          {
            router: '/home/bank_on',
            text: 'Bank On'
          }
        ]
      }
    ];
    this.text2 = 'At Northwest, we offer a variety of checking and savings accounts and business cash management ' +
      'services with easy-to-understand terms and the secure, convenient access our customers are looking for.';
    this.personals = [
      {
        title: 'Personal',
        texts: [
          {
            text: 'Checking',
            link: '/home/bank/personal-checking'
          },
          {
            text: 'Savings'
          },
          {
            text: 'CDs'
          },
          {
            text: 'IRAs and HSAs'
          }
        ]
      }
    ];
    this.businesses = [
      {
        title: 'Business',
        texts: [
          'Checking', 'Savings', 'Cash Management'
        ]
      }
    ];
    this.channels = [
      'Online & Mobile Banking', 'Cards & ATMs', 'Bankline', 'Checks', 'Safe Deposit Boxes'
    ];
    this.resources = [
      'Accounts Processing Manual', 'Knowledge Bases', 'Operations Manual', 'Policies & Procedures',
      'IMF, CD, IRA-CD Playbook', 'Personal Deposit Playbook'
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
      'Commercial Loans', 'Small Business Loans', 'Credit Cards'
    ];
    this.indirects = [
      'Indirect Lending'
    ];
    this.deliveries = [
      'Online & Mobile Banking', 'Bankline', 'BillMatrix'
    ];
    this.tools = [
      'Personalized Rate Quote Calculator', 'Referring Officers Page', 'Loan Navigator Knowledge Base',
      'Home Equity Playbook'
    ];
    this.iconsvgs = [
      {
        img: 'assets/images/icons/icon-tools-rates.svg',
        text: 'Rates',
        class: 'transparent'
      },
      {
        img: 'assets/images/icons/icon-tools-manuals.svg',
        text: 'Manuals & Knowledge',
        class: 'transparent'
      },
      {
        img: 'assets/images/icons/icon-tools-policies.svg',
        text: 'Policies',
        class: 'transparent'
      },
      {
        img: 'assets/images/icons/icon-tools-signature.svg',
        text: 'Signature',
        class: 'transparent'
      },
      {
        img: 'assets/images/icons/icon-tools-account.svg',
        text: 'Account Processing',
        class: 'transparent'
      },
      {
        move: 'assets/images/icons/icon-move.svg',
        img: 'assets/images/icons/icon-tools-operations.svg',
        bin: 'assets/images/icons/icon-bin.svg',
        text: 'Northwest Operations',
      },
      {
        move: 'assets/images/icons/icon-move.svg',
        img: 'assets/images/icons/icon-tools-custom.svg',
        bin: 'assets/images/icons/icon-bin.svg',
        text: 'Custom Tool',
      },
      {
        move: 'assets/images/icons/icon-move.svg',
        img: 'assets/images/icons/icon-tools-custom.svg',
        bin: 'assets/images/icons/icon-bin.svg',
        text: 'Custom Tool',
      }
    ];
    this.advisors = [
      {
        title: 'Northwest Advisors',
        text1: 'Through LPL Financial, the largest broker dealer in the country, we offer a full range of high-quality ' +
          'investment products and portfolio planning services.',
        text2: 'Our licensed financial advisors generally work with retail banking customers to buy and sell ' +
          'financial securities like stocks, bonds and mutual funds, as well as life insurance and annuities. ' +
          'Our financial advisors also help individuals open and manage traditional and Roth IRAs.'
      },
      {
        title: 'Trust Services',
        text1: 'When clients place assets in a trust, or legal contract that outlines who the beneficiaries are ' +
          'and how they can use the assets, and appoint Northwest to serve as trustee or fiduciary, our trust ' +
          'officers administer and invest the assets of the trust in the best interest of the beneficiary.',
        text2: 'We also help businesses map out succession plans, work with endowments and foundations and ' +
          'provide legacy planning and escrow services.'
      }
    ];
    this.invests = [
      {
        title: 'Our Services',
        texts: [
          'Investment Management'
        ]
      },
      {
        title: 'Our Services',
        texts: [
          'Trust Services', 'Retirement Plan Services', 'Employee Benefits'
        ]
      }
    ];
    this.thirds = [
      {
        title: 'Resources',
        texts: [
          'Northwest Advisors Referral Playbook', 'Northwest Advisors Recognizing Opportunities Presentation',
          'Calculate: How much can I contribute to my retirement plan each year?'
        ]
      },
      {
        title: 'Resources',
        texts: [
          'Trust Recognizing Opportunities Presentation', 'Article: Living Trust or Will? Is it right for me?'
        ]
      }
    ];
    this.text4 = 'Northwest Insurance Services is a wholly-owned subsidiary of Northwest Bank, offering property ' +
      'and casualty, life, disability and long-term care insurance, as well as group health, life and disability employee benefits.';
    this.text5 = 'We\'re independent insurance brokers, which means we offer insurance provided by a number of ' +
      'carriers, like BlueCross BlueShield, Lincoln Financial, Travelers and Liberty Mutual';
    this.insures = [
      'Property & Casualty', 'Life, Disability and Long-term Care', 'Employee Benefits'
    ];
    this.text6 = 'Drag a tool away (or click bin icon) to remove it from My Tools';
    this.lasts = [
      {
        texts: [
          'Recognizing Insurance Opportunities', 'Property Casualty Presentation'
        ]
      },
      {
        texts: [
          'Employee Benefits Presentation', 'Online Insurance quote center'
        ]
      }
    ];
    this.svgs = [
      {
        img: 'assets/images/icons/icon-tools-rates.svg',
        alt: 'Rates',
      },
      {
        img: 'assets/images/icons/icon-tools-manuals.svg',
        alt: 'Manuals & Knowledge',
      },
      {
        img: 'assets/images/icons/icon-tools-policies.svg',
        alt: 'Policies',
      },
      {
        img: 'assets/images/icons/icon-tools-signature.svg',
        alt: 'Signature',
      },
      {
        img: 'assets/images/icons/icon-printer.svg',
        alt: 'Northwest POD',
      },
      {
        img: 'assets/images/icons/icon-tools-account.svg',
        alt: 'Account Processing',
      },
      {
        img: 'assets/images/icons/icon-tools-operations.svg',
        alt: 'Northwest Operations',
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        alt: 'Custom Tool',
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        alt: 'Custom Tool',
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        alt: 'Custom Tool',
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        alt: 'Custom Tool',
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        alt: 'Custom Tool',
      }
    ];
    this.text7 = 'Drag a tool (or click + icon) to add it to My Tools';
    this.sptools = [
      {
        img: 'assets/images/icons/icon-tools-POD.svg',
        text: 'Northwest POD'
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
        img: 'assets/images/icons/icon-tools-signature.svg',
        text: 'Signature'
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        text: 'Custom Tool'
      },
      {
        img: 'assets/images/icons/icon-tools-operations.svg',
        text: 'Northwest Operations'
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        text: 'Custom Tool'
      },
      {
        img: 'assets/images/icons/icon-tools-custom.svg',
        text: 'Custom Tool'
      }
    ];
    this.text8 = 'Drag a link away (or click bin icon) to remove it from My Links';
    this.groups = [
      {
        class: 'h6 text transparent',
        text: 'Rates'
      },
      {
        class: 'h6 text transparent',
        text: 'Manuals & Knowledge Bases'
      },
      {
        class: 'h6 text transparent',
        text: 'Policies'
      },
      {
        drag: 'assets/images/icons/icon-drag.svg',
        text: 'Signature',
        class: 'h6 text',
        delete: 'assets/images/icons/icon-bin.svg'
      },
      {
        drag: 'assets/images/icons/icon-drag.svg',
        text: 'Northwest POD',
        class: 'h6 text',
        delete: 'assets/images/icons/icon-bin.svg'
      },
      {
        drag: 'assets/images/icons/icon-drag.svg',
        text: 'Account Processing Manual',
        class: 'h6 text',
        delete: 'assets/images/icons/icon-bin.svg'
      },
      {
        drag: 'assets/images/icons/icon-drag.svg',
        text: 'Northwest Operations Manual',
        class: 'h6 text',
        delete: 'assets/images/icons/icon-bin.svg'
      },
      {
        drag: 'assets/images/icons/icon-drag.svg',
        text: 'Custom tool',
        class: 'h6 text',
        delete: 'assets/images/icons/icon-bin.svg'
      }
    ];
    this.text9 = 'Drag a link (or click + icon) to add it to My Links';
    this.suglinks = [
      'Northwest at work', 'Careers', 'Work schedule', 'Bank On', 'Contacts'
    ];
    this.searchModals = [
      {
        img: 'assets/images/search/linklist-link.svg',
        text: 'Northwest at work'
      },
      {
        img: 'assets/images/search/linklist-article.svg',
        text: 'Summer Associate Spotlight: Brooke Buzynski',
        router: '/home/bank-on/summer-associate'
      },
      {
        img: 'assets/images/search/linklist-doc.svg',
        text: 'Annual Report 2018.pdf'
      },
      {
        img: 'assets/images/search/linklist-doc.svg',
        text: 'Do you work more than 39 hours a week.doc'
      },
      {
        img: 'assets/images/search/linklist-manual.svg',
        text: 'Working Etiquette 2018 v1.0.13.pdf'
      }
    ];
    this.showHidden1 = false;
    this.showHidden2 = false;
    this.showHidden3 = false;
    this.showHidden4 = false;
    this.showHidden5 = false;
    this.showHidden6 = false;
    this.showHidden7 = false;
  }

  ngOnInit() {
    console.log(this.departments[0].titles[0].texts, '---');
  }

  activetoggle1(event: any) {
    this.showHidden1 = !this.showHidden1;
    this.showHidden2 = false;
    this.showHidden3 = false;
    this.showHidden4 = false;
    this.showHidden5 = false;
    this.showHidden6 = false;
    this.showHidden7 = false;
  }

  activetoggle2(event: any) {
    this.showHidden2 = !this.showHidden2;
    this.showHidden1 = false;
    this.showHidden3 = false;
    this.showHidden4 = false;
    this.showHidden5 = false;
    this.showHidden6 = false;
    this.showHidden7 = false;
  }

  activetoggle3(event: any) {
    this.showHidden3 = !this.showHidden3;
    this.showHidden1 = false;
    this.showHidden2 = false;
    this.showHidden4 = false;
    this.showHidden5 = false;
    this.showHidden6 = false;
    this.showHidden7 = false;
  }

  activetoggle4(event: any) {
    this.showHidden4 = !this.showHidden4;
    this.showHidden1 = false;
    this.showHidden2 = false;
    this.showHidden3 = false;
    this.showHidden5 = false;
    this.showHidden6 = false;
    this.showHidden7 = false;
  }

  activetoggle5(event: any) {
    this.showHidden5 = !this.showHidden5;
    this.showHidden1 = false;
    this.showHidden2 = false;
    this.showHidden3 = false;
    this.showHidden4 = false;
    this.showHidden6 = false;
    this.showHidden7 = false;
  }

  activetoggle6(event: any) {
    this.showHidden6 = !this.showHidden6;
    this.showHidden1 = false;
    this.showHidden2 = false;
    this.showHidden3 = false;
    this.showHidden4 = false;
    this.showHidden5 = false;
    this.showHidden7 = false;
  }

  activetoggle7(event: any) {
    this.showHidden7 = !this.showHidden7;
    this.showHidden1 = false;
    this.showHidden2 = false;
    this.showHidden3 = false;
    this.showHidden4 = false;
    this.showHidden5 = false;
    this.showHidden6 = false;
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.router.navigateByUrl('/home/search-result');
    }
  }

  search(event: any) {
    this.router.navigateByUrl('/home/search-result');
  }

}
