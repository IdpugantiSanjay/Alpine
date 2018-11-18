import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  addIcon = 'add_circle_outline';


  showSpinner = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }


  ngOnInit() {
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
    //   )
    //   .subscribe(
    //     event => {
    //       if (event instanceof NavigationStart) {
    //         console.log('Showing Spinner');
    //         this.showSpinner = true;
    //       } else {
    //         console.log('Hiding Spinner');
    //         // this.showSpinner = false;
    //       }
    //     });
  }

  onMouseOverAddIcon() {
    this.addIcon = 'add_circle';
  }

  onMouseOutOfAddIcon() {
    this.addIcon = 'add_circle_outline';
  }

}
