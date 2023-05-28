import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AuthService } from '../../modules/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInData) {
    if (signInData.username && signInData.password) {
      return this.authService.signIn(
        signInData.username,
        String(signInData.password),
      );
    } else {
      return new NotFoundException('Missing params');
    }
  }
}
