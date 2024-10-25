import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register() {
    return {
      message: 'register successfully',
    };
  }

  login() {
    return {
      message: 'login successfully',
    };
  }
}
