import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { Messages } from '../core/messages/messages';
import { ConfirmationService, MessageService } from 'primeng/api';

export class requestDataModel {
  department: string; // project,
  records: Array<{projectId: string, projectName: string, request: Array<{
    id: string,
    type: string,
    message: string,
    empName?: string,
    empId?: string,
    fromDate?: string,
    toDate?: string,
    allocationRequired?: string,
    fields?: Array<{key: string, value: string, id: string}>
  }>}>;
}

export class requestModel {
  data: Array<requestDataModel>;
  total: Number;
}


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent implements OnInit {
  requests: requestModel = {
    data: [
      {
        department: 'Project Requests',
        records: [
          {
            projectId: 'p1', projectName: 'SCA', request: [
              {id: '1', empName: 'Ankit Malhotra', empId: 'e1', fromDate: '20/04/2024', toDate: '20/05/2024', allocationRequired: '50', message: 'Optional update message given by PM', type: '1'},
              {id: '2', empName: 'Manish Dixit', empId: 'e2', fromDate: '20/04/2024', toDate: '20/05/2024', allocationRequired: '50', message: 'Optional update message given by PM', type: '1'},
              {id: '3', message: 'Optional update message given by PM', type: '2', fields: [{key: 'key1', value: 'value1', id: '3.1'}, {key: 'key2', value: 'value2', id: '3.2'}, {key: 'key3', value: 'value3', id: '3.3'}, {key: 'key4', value: 'value4', id: '3.4'}]}
            ]
          },
          {
            projectId: 'p2', projectName: 'TKS', request: [
              {id: '1', empName: 'Ankit Malhotra', empId: 'e1', allocationRequired: '50', message: 'Optional update message given by PM', type: '1'},
              {id: '2', empName: 'Manish Dixit', empId: 'e2', allocationRequired: '50', message: 'Optional update message given by PM', type: '1'},
              {id: '3', message: 'Optional update message given by PM', type: '2', fields: [{key: 'key1', value: 'value1', id: '3.1'}, {key: 'key2', value: 'value2', id: '3.2'}, {key: 'key3', value: 'value3', id: '3.3'}, {key: 'key4', value: 'value4', id: '3.4'}]}
            ]
          }
        ]
      }
    ],
    total: 20
  }

  declineReason= '';
  
  constructor(
    private requestService: RequestService,
    private pubSubService: NgxPubSubService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    this.requestService.getRequests().subscribe({
      next: (success) => {
        this.requests = success;
      }, error: (err) => {
        this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: Messages.Something_went_wrong});
      }
    })
  }
  
  decline(req: any) {
    this.confirmationService.confirm({});
  }

  acceptRequest(req: any) {}

  accept() {
    console.log('accept');
    this.confirmationService.close();
  }
  
}
