import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) {}

  async createDevice(dto: CreateDeviceDto) {
    return this.prisma.devices.create({
      data: { 
        ...dto, 
        last_active: dto.last_active ? new Date(dto.last_active) : new Date(),
        ip_address: dto.ip_address ?? '' 
      },
    });
  }

  async getAllDevices() {
    return this.prisma.devices.findMany();
  }

  async getDeviceById(id: number) {
    return this.prisma.devices.findUnique({
      where: { id },
    });
  }

  async getDevicesByUserId(userId: number) {
    return this.prisma.devices.findMany({
      where: { userId },
    });
  }

  async updateDevice(id: number, dto: Partial<CreateDeviceDto>) {
    return this.prisma.devices.update({
      where: { id },
      data: dto,
    });
  }

  async deleteDevice(id: number) {
    return this.prisma.devices.delete({
      where: { id },
    });
  }
}
