import { filter, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private router: Router,
    private titleService: Title
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((activeRoute) => {
        return "title example";
      })
    ).subscribe((pathString) => this.titleService.setTitle(pathString));
  }
}
