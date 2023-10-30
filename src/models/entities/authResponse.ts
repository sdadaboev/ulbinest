export class AuthResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;

    constructor(
      access_token: string,
      refresh_token: string,
      expires_in: number
    ) {
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.expires_in = expires_in;
    }
  }
  