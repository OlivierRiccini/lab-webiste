import { Component, OnInit } from '@angular/core';

// https://www.ziprecruiter.com/post-a-job

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  public jobs = [
    {
      title: 'Blockchain Business Analyst',
      createdAt: new Date('12-01-2020'),
      location: 'Remote',
      description: `It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout.
       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      requirements: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      offer: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look like readable English.
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
    {
      title: 'Blockchain Developer - Ethereum',
      createdAt: new Date('12-01-2020'),
      location: 'Remote',
      description: `It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout.
       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      requirements: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      offer: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look like readable English.
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
    {
      title: 'Blockchain Developer - Hyperledger',
      createdAt: new Date('12-01-2020'),
      location: 'Remote',
      description: `It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout.
       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      requirements: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      offer: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look like readable English.
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
    {
      title: 'Web Designer',
      createdAt: new Date('12-01-2020'),
      location: 'Remote',
      description: `It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout.
       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      requirements: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
       letters, as opposed to using 'Content here, content here', making it look like readable English.
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
       and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      offer: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look like readable English.
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
