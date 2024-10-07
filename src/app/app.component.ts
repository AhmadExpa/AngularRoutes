import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  isCollapsed: boolean = false;
  title = 'Dashboard';
  handleSidebarState(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }
  ngOnInit(): void {
    // Router Events

    // Using Angular Library
    // this.router.events.subscribe((event) => {
    //   console.log('Router Event: ', event);
    // });

    // Using RxJs Library
    // this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
    //   console.log('Router Event Start: ', event);
    // })
    // this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
    //   console.log('Router Event End: ', event);
    // })
  }
}
