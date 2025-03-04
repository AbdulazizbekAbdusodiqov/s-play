import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { RefreshTokenGuard } from '../common/guards';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}
  @UseGuards(RefreshTokenGuard)
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.create(createSubscriptionDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get()
  findAll() {
    return this.subscriptionService.findAll();
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(+id);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(+id, updateSubscriptionDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(+id);
  }
}
