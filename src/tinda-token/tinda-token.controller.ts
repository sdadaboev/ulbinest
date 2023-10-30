import { Controller, Post, HttpException, HttpStatus, Body } from '@nestjs/common';

import { TindaTokenService } from './tinda-token.service';
@Controller('/auth')
export class TindaTokenController {
    constructor(private readonly tindaTokenService: TindaTokenService) {}
  
    @Post('/tinda-response')
    
     async login(@Body() { username, password }): Promise<any> {
    
      try {
       return this.tindaTokenService.responseToken(username, password)
      } catch (error) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
    }
    @Post('/access-token')
    
    async accessToken(@Body() { username, password }): Promise<any> {
   
     try {
      return this.tindaTokenService.getAccessToken(username, password)
     } catch (error) {
       throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
     }
   }
  }
    
