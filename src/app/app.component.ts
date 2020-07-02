import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {SidebarState} from './interfaces';
import {selectSidebarOpen} from './store/sidebar/sidebar.selectors';
import {SidebarCloseAction, SidebarToggleAction} from './store/sidebar/sidebar.actions';
import {DONATION_CONTENT} from './content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  donationContent = DONATION_CONTENT;

  public open$: Observable<boolean>;

  constructor(private store$: Store<SidebarState>) {
  }

  ngOnInit(): void {
    this.open$ = this.store$.pipe(select(selectSidebarOpen));
  }

  toggleSidebar(): void {
    this.store$.dispatch(new SidebarToggleAction());
  }

  closeSidebar(): void {
    this.store$.dispatch(new SidebarCloseAction());
  }
}
