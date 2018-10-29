import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable, Subscription} from 'rxjs';
import { ContactService } from '../../_services/contact-service';
import { Contact } from '../../_models/contact';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, DoCheck {

  contact: Contact;
  editMode: boolean;
  showSpinner: boolean;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService,
              protected localStorage: LocalStorage) {

               }

  ngOnInit() {
    this.contact = {emailAddress: '', firstName: '', lastName: ''};

    this.editMode = false;
  }

  ngDoCheck () {
     const update = this.contactService.updateContact;
     this.contactService.updateContact = undefined;
    if (update) {
      this.editMode = true;
      this.contact.emailAddress = update['emailAddress'];
      this.contact.firstName = update['firstName'];
      this.contact.lastName = update['lastName'];
    }

  }

  onSubmit() {
    this.showSpinner = true;
    const user = { emailAddress : this.contact.emailAddress, firstName : this.contact.firstName, lastName: this.contact.lastName };

    if ( this.editMode ) {
      this.contactService.updateContactStore(user);
      this.editMode = false;
      this.showSpinner = false;
      this.resetForm();
    } else {
      this.contactService.addContact(user);
      this.showSpinner = false;
      this.resetForm();
    }

}

onCanel() {
  this.editMode = false;
  this.resetForm();
}

resetForm() {
  this.contact.emailAddress = '';
  this.contact.firstName = '';
  this.contact.lastName = '';
}

}
