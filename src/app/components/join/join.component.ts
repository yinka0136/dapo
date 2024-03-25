import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinComponent implements OnInit {
  @ViewChild('closeModalButton')
  closeModalButton!: ElementRef<HTMLButtonElement>;

  constructor() {}

  ngOnInit(): void {}

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_9dql108',
        'template_i3m516c',
        e.target as HTMLFormElement,
        'LIhYj7NSHmNSnZBfD'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.closeModalButton.nativeElement.click();
          alert('Email sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
