import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app/store';
import { WorkAreaAction } from '../app/store';
import { HesServiceStatus } from './models/workarea-hesinfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) {}
  title = 'storeDemo';
  userStatus$: Observable<HesServiceStatus> = this.store.select(fromRoot.getPingServiceStatus);
  ngOnInit(): void {
    this.store.dispatch(WorkAreaAction.PingHesService());
   // this.userStatus$ = this.store.select(fromRoot.getPingServiceStatus);
  }
}
