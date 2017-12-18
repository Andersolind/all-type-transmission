import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

// Classes
export class Images {
  url: string;
  text: string;
}

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  // public carouselOne: NgxCarousel;
  // image: string[];
  public image: Images[];
  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NgxCarousel;

  public carouselTileItems: Array<any> = [];
  public carouselTile: NgxCarousel;

  public carouselTileOneItems: Array<any> = [];
  public carouselTileOne: NgxCarousel;

  public servicesHomeArray: Array<any> = [];
  public carouselTileTwo: NgxCarousel;
  constructor() {}

  ngOnInit() {
    // this.ServicesHomeArray =[url]

  
    // images = [{ url: 'Test', text: 'Test' }];

    // images.this.image = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'];

    // this.carouselBanner = {
    //   grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    //   slide: 4,
    //   speed: 500,
    //   interval: 5000,
    //   point: {
    //     visible: true,
    //     pointStyles: `
    //       .ngxcarouselPoint {
    //         list-style-type: none;
    //         text-align: center;
    //         padding: 12px;
    //         margin: 0;
    //         white-space: nowrap;
    //         overflow: auto;
    //         position: absolute;
    //         width: 100%;
    //         bottom: 20px;
    //         left: 0;
    //         box-sizing: border-box;
    //       }
    //       .ngxcarouselPoint li {
    //         display: inline-block;
    //         border-radius: 999px;
    //         background: rgba(255, 255, 255, 0.55);
    //         padding: 5px;
    //         margin: 0 3px;
    //         transition: .4s ease all;
    //       }
    //       .ngxcarouselPoint li.active {
    //           background: white;
    //           width: 10px;
    //       }
    //     `
    //   },
    //   load: 2,
    //   custom: 'banner',
    //   touch: true,
    //   loop: false,
    //   easing: 'cubic-bezier(0, 0, 0.2, 1)'
    // };

    // this.carouselTile = {
    //   grid: { xs: 2, sm: 3, md: 3, lg: 4, all: 0 },
    //   speed: 600,
    //   interval: 3000,
    //   point: {
    //     visible: true,
    //     pointStyles: `
    //       .ngxcarouselPoint {
    //         list-style-type: none;
    //         text-align: center;
    //         padding: 12px;
    //         margin: 0;
    //         white-space: nowrap;
    //         overflow: auto;
    //         box-sizing: border-box;
    //       }
    //       .ngxcarouselPoint li {
    //         display: inline-block;
    //         border-radius: 50%;
    //         border: 2px solid rgba(0, 0, 0, 0.55);
    //         padding: 4px;
    //         margin: 0 3px;
    //         transition-timing-function: cubic-bezier(.17, .67, .83, .67);
    //         transition: .4s;
    //       }
    //       .ngxcarouselPoint li.active {
    //           background: #6b6b6b;
    //           transform: scale(1.2);
    //       }
    //     `
    //   },
    //   load: 2,
    //   touch: true
    // };

    // this.carouselTileOne = {
    //   grid: { xs: 2, sm: 3, md: 4, lg: 6, all: 0 },
    //   speed: 600,
    //   interval: 3000,
    //   point: {
    //     visible: true,
    //     pointStyles: `
    //       .ngxcarouselPoint {
    //         list-style-type: none;
    //         text-align: center;
    //         padding: 12px;
    //         margin: 0;
    //         white-space: nowrap;
    //         overflow: auto;
    //         box-sizing: border-box;
    //       }
    //       .ngxcarouselPoint li {
    //         display: inline-block;
    //         border-radius: 50%;
    //         background: #6b6b6b;
    //         padding: 5px;
    //         margin: 0 3px;
    //         transition: .4s;
    //       }
    //       .ngxcarouselPoint li.active {
    //           border: 2px solid rgba(0, 0, 0, 0.55);
    //           transform: scale(1.2);
    //           background: transparent;
    //         }
    //     `
    //   },
    //   load: 2,
    //   loop: true,
    //   touch: true,
    //   easing: 'ease',
    //   animation: 'lazy'
    // };

    this.carouselTileTwo = {
      grid: { xs: 1, sm: 3, md: 4, lg: 6, all: 230 },
      speed: 600,
      interval: 3000,
      point: {
        visible: false
      },
      load: 2,
      touch: true
    };
    this.carouselTileTwoLoad();
  }

  onmoveFn(data) {
    // console.log(data);
  }

  public carouselTileTwoLoad() {

    const image: Images[] = [
      { url: 'assets/1.jpg', text: 'Services' },
      { url: 'assets/2.jpg', text: 'Services' },
      { url: 'assets/3.jpg', text: 'Services' }
    ];
   const len = this.servicesHomeArray.length;
    if (len <= 3) {
      for (let i = len;
         i < len + 3; i++) {
    this.servicesHomeArray.push(image[i]);
      }
  }
}
}
