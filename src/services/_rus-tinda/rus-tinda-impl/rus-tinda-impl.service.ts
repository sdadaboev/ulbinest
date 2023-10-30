import { RusTindaService } from './../rus-tinda/rus-tinda.service';
import { Inject, Injectable } from '@nestjs/common';
import { TindaApiParamsType } from './your-enums'; // Import your enums
import { CallBackRequest } from 'src/resourses/callback-request.model'; // Import your request class
import { _Merchant, _Office, _Machine } from './your-models'; // Import your model classes
import { TindaApiParamsService } from './tinda-api-params.service'; // Import your service
import { AuthResponse } from 'src/models/entities/authResponse';
import { ConfigService } from '@nestjs/config';

@Injectable()

export class RusTindaServiceImpl implements RusTindaService {
    private getTokenUrl: string;
    private refreshTokenUrl: string;
    private user: string;
    private password: string;
    private merchantCallBackUrl: string;
    private storeCallBackUrl: string;
    private posCallBackUrl: string;
    private merchantUrl: string;
    private storeUrl: string;
    private posUrl: string;
    
    private response: AuthResponse;
    private expireDate: number = Date.now();
    
    
    constructor(
        private readonly tindaApiParamsService: TindaApiParamsService,
        private readonly machineService: MachineService,
        private readonly officeDao: OfficeDao,
        private readonly merchantDao: MerchantDao,
        private readonly machineDao: MachineDao,
        private readonly fiscalCardDao: FiscalCardDao,
        @Inject('threadPool') private readonly threadPool: ExecutorService,
      ) {
        // Инициализация конфигурационных параметров из настроек
        const configService = new ConfigService();
        this.getTokenUrl = configService.get<string>('tinda.getToken');
        this.refreshTokenUrl = configService.get<string>('tinda.refreshToken');
        this.user = configService.get<string>('tinda.user');
        this.password = configService.get<string>('tinda.password');
        this.merchantCallBackUrl = configService.get<string>('tinda.merchantCallBackUrl');
        this.storeCallBackUrl = configService.get<string>('tinda.storeCallBackUrl');
        this.posCallBackUrl = configService.get<string>('tinda.posCallBackUrl');
        this.merchantUrl = configService.get<string>('tinda.merchant');
        this.storeUrl = configService.get<string>('tinda.store');
        this.posUrl = configService.get<string>('tinda.pos');
      }
    
    



  createMerchant(merchant: _Merchant, machineId: number) {
    // Implement the createMerchant method
    // Replace the implementation with your logic
  }

  updateMerchant(merchant: _Merchant, machineId: number) {
    // Implement the updateMerchant method
    // Replace the implementation with your logic
  }

  deleteMerchant(merchant: _Merchant, machineId: number) {
    // Implement the deleteMerchant method
    // Replace the implementation with your logic
  }

  createStore(office: _Office, machineId: number) {
    // Implement the createStore method
    // Replace the implementation with your logic
  }

  updateStore(office: _Office, machineId: number) {
    // Implement the updateStore method
    // Replace the implementation with your logic
  }

  deleteStore(office: _Office, machineId: number) {
    // Implement the deleteStore method
    // Replace the implementation with your logic
  }

  createPos(machine: _Machine) {
    // Implement the createPos method
    // Replace the implementation with your logic
  }

  updatePos(machine: _Machine) {
    // Implement the updatePos method
    // Replace the implementation with your logic
  }

  deletePos(machine: _Machine) {
    // Implement the deletePos method
    // Replace the implementation with your logic
  }

  saveMachine(request: CallBackRequest) {
    // Implement the saveMachine method
    // Replace the implementation with your logic
  }

  saveMerchant(request: CallBackRequest) {
    // Implement the saveMerchant method
    // Replace the implementation with your logic
  }

  saveOffice(request: CallBackRequest) {
    // Implement the saveOffice method
    // Replace the implementation with your logic
  }
  private async checkExpire() {
    if (this.response && this.response.expires_in && this.expireDate > Date.now()) {
      return;
    }

    try {
      await this.refreshToken();
    } catch (e) {
      await this.accessToken();
      await this.refreshToken();
    }
  }

  private async accessToken() {
    const response: AuthResponse = /* Implement logic to get the access token */;
    this.response = response;
    console.log('Access Token:', response.access_token);
  }

  private async refreshToken() {
    if (!this.response || !this.response.refresh_token) {
      throw new Error('Re-login required');
    }

    const response: AuthResponse = /* Implement logic to refresh the access token */;
    this.response = response;
    this.expireDate = Date.now() + response.expires_in * 1000;
    console.log('Refreshed Access Token:', response.access_token);
  }
}

