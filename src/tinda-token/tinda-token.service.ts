import { Injectable } from '@nestjs/common';
import axios  from 'axios';
@Injectable()
export class TindaTokenService {
    async responseToken(username: string, password: string): Promise<any> {
        const response  = await axios.post('https://gate.tinda.uz/token', {username, password})
        return response.data
    }

    async getAccessToken(username: string, password: string): Promise<{access_token: string}> {
        const response  = await axios.post('https://gate.tinda.uz/token', {username, password})
        return response.data.access_token
    }


}
