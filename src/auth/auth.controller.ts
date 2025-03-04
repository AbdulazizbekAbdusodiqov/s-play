import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto, UserSignInDto } from 'src/users/dto';
import { Response } from 'express';
import { CookieGetter } from 'src/decorators/cookie-getter.decorator';
import { AdminSignInDto, CreateAdminDto } from '../admin/dto';
import { ResponseFields } from '../common/types';
import { RefreshTokenGuard } from '../common/guards';
import { GetCurrnetUser } from '../common/decorators/get-current-user.decorator';
import { GetCurrentId } from '../common/decorators/get-current-user-id.decorator';
import { AdminRefreshTokenGuard } from '../common/guards/admin-refresh-token.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Yangi foydalanuvchilarni ro'yxatdan o'tkazish" })
  @Post('sign-up')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto)
  }

  @ApiOperation({ summary: "Tizimga kirish" })
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(
    @Body() userSignInDto: UserSignInDto,
    @Res({ passthrough: true }) res: Response
  ): Promise<ResponseFields> {
    return this.authService.signIn(userSignInDto, res)
  }

  @UseGuards(RefreshTokenGuard)
  @Get("sign-out")
  signout(
    @GetCurrentId() userId : number,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOut(+userId, res)
  }

  @UseGuards(RefreshTokenGuard)
  @Get("refresh")
  refresh(
    @GetCurrentId() userId: number,
    @GetCurrnetUser("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ):Promise<ResponseFields> {
    return this.authService.refreshToken(+userId, refreshToken, res)
  }
  
  
  @ApiOperation({ summary: "Yangi admin ro'yxatdan o'tkazish" })
  @Post('admin/sign-up')
  signUpAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.adminSignUp(createAdminDto)
  }
  
  @ApiOperation({ summary: "Admin tizimga kirish" })
  @HttpCode(HttpStatus.OK)
  @Post('admin/sign-in')
  adminSignIn(
    @Body() adminSignInDto: AdminSignInDto,
    @Res({ passthrough: true }) res: Response
  ):Promise<ResponseFields> {
    return this.authService.adminSignIn(adminSignInDto, res)
  }
  
  @UseGuards(AdminRefreshTokenGuard)
  @Get("admin/sign-out")
  AdminSignout(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.AdminSignOut(refreshToken, res)
  }
  
  
  @UseGuards(AdminRefreshTokenGuard)
  @Get("admin/refresh")
  AdminRefresh(
    @GetCurrentId() id: number,
    @GetCurrnetUser("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ):Promise<ResponseFields> {
    return this.authService.AdminRefreshToken(+id, refreshToken, res)
  }
  
}
