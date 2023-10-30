import { Injectable } from '@nestjs/common';
import { _Merchant, _Office, _Machine } from './your-models'; // Import your model classes
import { CallBackRequest } from 'src/resourses/callback-request.model'; // Import your request class

@Injectable()
export class RusTindaService {
  createMerchant(merchant: _Merchant, machineId: number) {
    // Implement the createMerchant method
  }

  updateMerchant(merchant: _Merchant, machineId: number) {
    // Implement the updateMerchant method
  }

  deleteMerchant(merchant: _Merchant, machineId: number) {
    // Implement the deleteMerchant method
  }

  createStore(office: _Office, machineId: number) {
    // Implement the createStore method
  }

  updateStore(office: _Office, machineId: number) {
    // Implement the updateStore method
  }

  deleteStore(office: _Office, machineId: number) {
    // Implement the deleteStore method
  }

  createPos(machine: _Machine) {
    // Implement the createPos method
  }

  updatePos(machine: _Machine) {
    // Implement the updatePos method
  }

  deletePos(machine: _Machine) {
    // Implement the deletePos method
  }

  saveMachine(request: CallBackRequest) {
    // Implement the saveMachine method
  }

  saveMerchant(request: CallBackRequest) {
    // Implement the saveMerchant method
  }

  saveOffice(request: CallBackRequest) {
    // Implement the saveOffice method
  }
}
