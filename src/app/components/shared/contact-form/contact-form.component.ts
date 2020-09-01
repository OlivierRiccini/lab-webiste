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
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.emailService.sendEmail(this.contactForm.value).subscribe(
      res => console.log('RES ', res.status),
      err => console.log('ERR ', err)
      );
    console.log(this.contactForm.value);
    this.resetForm();
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      from: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  private resetForm(): void {
    this.submitted = false;
    this.contactForm.reset();
  }


}
