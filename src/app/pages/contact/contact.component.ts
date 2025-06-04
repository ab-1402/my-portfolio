import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  submitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      alert('Thank you for your message!');
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
