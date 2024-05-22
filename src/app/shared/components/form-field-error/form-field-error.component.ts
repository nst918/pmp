import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Messages } from '../../../core/messages/messages';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  imports: [CommonModule, FormsModule],
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
