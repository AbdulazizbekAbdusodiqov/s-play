import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto, UserSignInDto } from 'src/users/dto';
import { Response } from 'express';
import { CookieGetter } from 'src/decorators/cookie-getter.decorator';
import { AdminSignInDto, CreateAdminDto } from '../admin/dto';

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
  ) {
    return this.authService.signIn(userSignInDto, res)
  }

  @HttpCode(HttpStatus.OK)
  @Get("sign-out")
  signout(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOut(refreshToken, res)
  }

  @HttpCode(HttpStatus.OK)
  @Get(":id/refresh")
  refresh(
    @Param("id") id: number,
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshToken(id, refreshToken, res)
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
  ) {
    return this.authService.adminSignIn(adminSignInDto, res)
  }
  
  @HttpCode(HttpStatus.OK)
  @Get("admin/sign-out")
  AdminSignout(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.AdminSignOut(refreshToken, res)
  }
  
  
  @HttpCode(HttpStatus.OK)
  @Get("admin/:id/refresh")
  AdminRefresh(
    @Param("id") id: number,
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.AdminRefreshToken(+id, refreshToken, res)
  }
  
}
