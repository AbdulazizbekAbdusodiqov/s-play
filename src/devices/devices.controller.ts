import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.createDevice(createDeviceDto);
  }

  @Get()
  findAll() {
    return this.devicesService.getAllDevices();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesService.getDeviceById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.updateDevice(+id, updateDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicesService.deleteDevice(+id);
  }
}
