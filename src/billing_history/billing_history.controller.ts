import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillingHistoryService } from './billing_history.service';
import { CreateBillingHistoryDto } from './dto/create-billing_history.dto';
import { UpdateBillingHistoryDto } from './dto/update-billing_history.dto';

@Controller('billing-history')
export class BillingHistoryController {
  constructor(private readonly billingHistoryService: BillingHistoryService) {}

  @Post()
  create(@Body() createBillingHistoryDto: CreateBillingHistoryDto) {
    return this.billingHistoryService.create(createBillingHistoryDto);
  }

  @Get()
  findAll() {
    return this.billingHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillingHistoryDto: UpdateBillingHistoryDto) {
    return this.billingHistoryService.update(+id, updateBillingHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billingHistoryService.remove(+id);
  }
}
