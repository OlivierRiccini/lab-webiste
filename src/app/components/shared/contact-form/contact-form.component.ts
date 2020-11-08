import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;
  public isSending = false;
  public error: string;
  public success: string;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    this.isSending = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.emailService.sendEmail(this.contactForm.value).subscribe(
      res => {
        this.success = `Succeccfully sent! Thanks for your message we'll get back to you asap!`;
        this.contactForm.reset();
        this.isSending = false;
        setTimeout(() => {
          this.success = undefined;
        }, 3000);
      },
      err => {
        this.error = 'Something went wrong while sending email. Please click the button down below or use our email address: hello@blockbrainers.com';
        this.isSending = false;
      }
    );
  }

  public onRetry(): void {
    this.isSending = false;
    this.error = undefined;
    this.success = undefined;
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      from: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

}
