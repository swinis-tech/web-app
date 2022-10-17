import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/components/helper/contact-helper.service';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  model = new Contact;
  submitted = false;
  error: {} | undefined; 
  constructor(private contactService: ContactService) { }
  onSubmit() {
    this.submitted = true; 
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  };

  ngOnInit(): void {
  }

}
