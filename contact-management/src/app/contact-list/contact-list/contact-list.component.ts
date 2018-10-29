import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit, ViewChild } from '@angular/core';
import { ContactService } from '../../_services/contact-service';
import { Observable, Subscription} from 'rxjs';
import { Contact } from '../../_models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit, OnDestroy, DoCheck {

  contactListForm: FormGroup;
  contacts: Observable<Array<Contact>>;
  private subscription: Subscription;
  displayedColumns = ['emailAddress', 'firstName', 'lastName', 'edit', 'delete'];
  dataSource: MatTableDataSource<Contact>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchField: string;

  constructor( private contactService: ContactService,
               protected localStorage: LocalStorage ) {

        this.contacts = this.contactService.contacts;
  }

  ngOnInit() {

    this.subscription = this.contacts
                    .subscribe(contacts => {
                      if (!contacts) {
                        return;
                      }
                      this.dataSource = new MatTableDataSource(contacts);
                      this.localStorage.getItem('filter')
                      .subscribe((searchTerm) => {
                        this.localStorage.getItem('sortBy')
                      .subscribe((sortBy) => {
                        this.searchField = searchTerm;
                        this.dataSource.filter = this.searchField;
                        if (sortBy) {
                          this.sort.active = sortBy.sortField;
                         this.sort.direction = sortBy.sortDirection;
                        }
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                      });
                      });
                    }, error => {
                        // Do something with error
                    });
                    this.contactService.loadContacts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }

  ngDoCheck() {
    this.contacts = this.contactService.contacts;
  }

  editContact(contact) {
    this.contactService.updateContacts(contact);
  }

  deleteContact(contact) {
    this.contactService.deleteContacts(contact);
  }

  applyFilter() {

    this.searchField = this.searchField.trim();
    this.searchField = this.searchField.toLowerCase();
    this.dataSource.filter = this.searchField;
    this.localStorage.setItem('filter', this.searchField).subscribe(() => {
    });
  }

  rowClicked() {
    this.localStorage.setItem('sortBy', { sortField: this.sort.active, sortDirection: this.sort.direction  }).subscribe(() => {
    });
  }

}
