import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-summer-associate',
  templateUrl: './summer-associate.component.html',
  styleUrls: ['./summer-associate.component.css']
})
export class SummerAssociateComponent implements OnInit {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  texts: any;
  chats: any;

  constructor(private router: Router) {
    this.text1 = 'John Brittner is a summer associate at our Zelienople office. He\'s an upcoming senior at ' +
      'Penn State Behrend majoring in accounting and finance with a minor in economics.';
    this.text2 = 'Having trouble making student loan payments or keeping all of your loans in order? ' +
      'Perhaps you\'re juggling multiple payments across several loan servicers.';
    this.text3 = 'The typical, home-owning family has a long-term mortgage with a relatively low ' +
      'interest rate. At the same time, many of these households carry other debts, such as student ' +
      'loans, car loans, and credit card balances.';
    this.text4 = 'Brooke Buzynski is a summer teller at our Roosevelt branch. She\'s a student at ' +
      'Liberty University  majoring in English with a teacher licensure. After college, Brooke wants ' +
      'to teach at a high school in Pennsylvania (preferably a 19 century American Literature course), ' +
      'but eventually, she\'d like to pursue a master degree and doctorate to teach at the college ' +
      'level. When asked what she\'s gotten out of her summer at Northwest, Brooke replied, Northwest ' +
      'has provided me with a lot of financial and customer service experience. Learning the daily ' +
      'operations within the bank has taught me responsibility and teamwork. Success often depends ' +
      'on one\'s commitment to their place of work, and I have found this to be applicable in all ' +
      'aspects of my life because of my time at Northwest.';
    this.texts = [
      'When you were young, what did you want to be when you grew up?',
      'When I was young I wanted to be a mailbox, so I could give mail to people but ' +
      'still not have to do anything. When I was a bit older I wanted to be a vet, but I wouldn\'t ' +
      'have the heart to put down animals.',
      'If you could meet anyone, living or dead, who would you meet?',
      'I would meet Steve Perry, because I love Journey and he is my favorite singer. Some of my ' +
      'friends make fun of me for it, but his range is amazing and his music is great so I don\'t mind.'
    ];
    this.text5 = 'I spend my free time going to the gym, hanging out with friends, or reading. My ' +
      'favorite book is Dracula, but I really love Stephen King and Herman Melville as well. I also like ' +
      'walking my neighbor\'s three dogs (I really love dogs).';
    this.chats = [
      {
        img: 'assets/images/profiles/Anne.png',
        name: 'Anne Perkins',
        des: 'So happy @Brooke is enjoying her time at Northwest! I used to be a summer associate when ' +
          'I was in college and I loved it!'
      },
      {
        img: 'assets/images/profiles/Chris.png',
        name: 'Chris Traeger',
        des: 'I literally could not be happier to have @Brooke on our team!'
      },
      {
        img: 'assets/images/profiles/Leslie-.png',
        name: 'Leslie Knope',
        des: 'Brooke you’re amazing and wonderful and we are so happy you’re here.' +
          'I’d be happy to talk with you about your future and help you create a five-year plan.'
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

  add_comment() {
    console.log('add comments');
  }

}
