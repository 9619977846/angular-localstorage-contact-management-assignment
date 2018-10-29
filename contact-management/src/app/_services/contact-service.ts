import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, State } from '@ngrx/store';

import { Contact } from '../_models/contact';
import { AppStore } from '../app.store';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class ContactService {

    // Redux based variables
    contacts: Observable<Array<Contact>>;
    updateContact: Object;

    constructor( private store: Store<AppStore>,
                 protected localStorage: LocalStorage ) {
        this.contacts = store.select( (state) =>  state.contacts );
    }

    addContact(user) {

      this.localStorage.getItem<Array <Contact>>('user')
        .subscribe((data) => {
          // Called if data is valid or null
          if (data) {
            if (!data.some((item) => item.emailAddress === user.emailAddress)) {
              data.push(user);
            this.localStorage.setItem('user', data).subscribe(() => {
              this.store.dispatch({ type: 'ADD_CONTACTS', payload: user });
            });

          } else {

          }
        } else {
            this.localStorage.setItem('user', [user]).subscribe(() => {
              this.store.dispatch({ type: 'ADD_CONTACTS', payload: user });

            });
          }

        }, (error) => {
          // Called if data is invalid
        });
    }

    updateContacts(user) {
      this.updateContact = user;
    }

    loadContacts()  {
       this.localStorage.getItem<Array <Contact>>('user')
                  .subscribe((data) => {

                    const action = { type: 'GET_CONTACTS', payload: data };
                    this.store.dispatch(action);
                   });

     }

     updateContactStore(user) {

      this.localStorage.getItem<Array <Contact>>('user')
                  .subscribe((data) => {
                    data.forEach((element, index) => {
                      if (element.emailAddress === user.emailAddress) {
                        data[index] = user;
                        this.localStorage.setItem('user', data).subscribe(() => {
                          this.store.dispatch({ type: 'UPDATE_CONTACTS', payload: user });
                          });
                      }
                   });
                  });

    }

    deleteContacts(user) {

      this.localStorage.getItem<Array <Contact>>('user')
                  .subscribe((data) => {
                    const index = data.indexOf(user);
                    data.splice(index, 1);
                    this.localStorage.setItem('user', data).subscribe(() => {
                      this.store.dispatch({ type: 'DELETE_CONTACT', payload: user });
                      });
                  });

    }
}
