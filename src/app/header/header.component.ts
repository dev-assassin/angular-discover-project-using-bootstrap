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
  }

  ngOnInit() {
    console.log(this.departments[0].titles[0].texts, '---');
  }

}
