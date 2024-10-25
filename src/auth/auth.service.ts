import { Injectable } from '@nestjs/common';
import { User, Note } from '@prisma/client';

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
