import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Globalconstant } from 'src/app/shared/global-constant';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  responseMessage: any;
  key = environment.emailJSKey;
  serviceId = environment.mailService;
  templateId = environment.templateId;
  toMail: string = 'jeraldtulibao@gmail.com';
  loading = false;
  contactForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, [Validators.pattern(Globalconstant.nameRegex)]],
      email: [null, [Validators.pattern(Globalconstant.emailRegex)]],
      subject: [null, [Validators.minLength(10)]],
      message: [null, [Validators.minLength(20)]],
    });
  }

  onSubmit = async (): Promise<void> => {
    emailjs.init(this.key);
    const formData = this.contactForm.value;
    let response = await emailjs.send(this.serviceId, this.templateId, {
      from_name: formData.name,
      to_name: this.toMail,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    this.loading =true;
    setTimeout(() => {
      // Hide loading indicator after form submission
      this.loading = false;
      // Additional logic for form submission
    }, 2000);
    this.router.navigate(['/confirm']);
    this.contactForm.reset();
    
  };
  // onSubmit = async (): Promise<void> => {
  //   try {
  //     // Show loading indicator
  //     this.loading = true;
  
  //     // Initialize emailjs
  //     emailjs.init(this.key);
  
  //     // Extract form data
  //     const formData = this.contactForm.value;
  
  //     // Send email
  //     await emailjs.send(this.serviceId, this.templateId, {
  //       from_name: formData.name,
  //       to_name: this.toMail,
  //       from_email: formData.email,
  //       subject: formData.subject,
  //       message: formData.message,
  //     });
  
  //     // Hide loading indicator after successful form submission
  //     setTimeout(() => {
  //       this.loading = false;
  //     }, 2000); // 2 seconds delay for demonstration purposes
  
  //     // Reset form and navigate to confirmation page
  //     this.contactForm.reset();
  //     this.router.navigate(['/confirm']);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  
  //     // Hide loading indicator in case of error
  //     this.loading = false;
  //   }
  // };
  
}
