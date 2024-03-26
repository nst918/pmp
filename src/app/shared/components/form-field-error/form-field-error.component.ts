import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Messages } from '../../../core/messages/messages';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss']
})
export class FormFieldErrorComponent implements OnInit {

  @Input() _control: any;
  @Input() submitted: boolean= false;
  messageConstants= Messages;

  constructor() { }

  ngOnInit(): void {
  }

}
