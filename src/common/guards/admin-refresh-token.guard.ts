import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AdminRefreshTokenGuard extends AuthGuard('refresh-jwt') {}
