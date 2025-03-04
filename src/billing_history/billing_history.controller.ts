import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BillingHistoryService } from './billing_history.service';
import { CreateBillingHistoryDto } from './dto/create-billing_history.dto';
import { UpdateBillingHistoryDto } from './dto/update-billing_history.dto';
import { RefreshTokenGuard } from '../common/guards';

@Controller('billing-history')
export class BillingHistoryController {
  constructor(private readonly billingHistoryService: BillingHistoryService) {}

  @UseGuards(RefreshTokenGuard)
  @Post()
  create(@Body() createBillingHistoryDto: CreateBillingHistoryDto) {
    return this.billingHistoryService.create(createBillingHistoryDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get()
  findAll() {
    return this.billingHistoryService.findAll();
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingHistoryService.findOne(+id);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillingHistoryDto: UpdateBillingHistoryDto) {
    return this.billingHistoryService.update(+id, updateBillingHistoryDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billingHistoryService.remove(+id);
  }
}
