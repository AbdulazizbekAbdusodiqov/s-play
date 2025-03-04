import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './dto';
import { AdminRefreshTokenGuard } from '../common/guards/admin-refresh-token.guard';
import { SuperAdminGuard } from '../common/guards';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(AdminRefreshTokenGuard,SuperAdminGuard)
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
  
  @UseGuards(AdminRefreshTokenGuard,SuperAdminGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }
  
  @UseGuards(AdminRefreshTokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }
  
  @UseGuards(AdminRefreshTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @UseGuards(AdminRefreshTokenGuard,SuperAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
