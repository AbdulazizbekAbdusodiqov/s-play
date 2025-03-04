import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SubscriptionPlansService } from './subscription_plans.service';
import { CreateSubscriptionPlanDto } from './dto/create-subscription_plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription_plan.dto';
import { AdminRefreshTokenGuard } from '../common/guards/admin-refresh-token.guard';

@Controller('subscription-plans')
export class SubscriptionPlansController {
  constructor(private readonly subscriptionPlansService: SubscriptionPlansService) {}

  @UseGuards(AdminRefreshTokenGuard)
  @Post()
  create(@Body() createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.subscriptionPlansService.create(createSubscriptionPlanDto);
  }
  
  @UseGuards(AdminRefreshTokenGuard)
  @Get()
  findAll() {
    return this.subscriptionPlansService.findAll();
  }
  
  @UseGuards(AdminRefreshTokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionPlansService.findOne(+id);
  }
  
  @UseGuards(AdminRefreshTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    return this.subscriptionPlansService.update(+id, updateSubscriptionPlanDto);
  }
  
  @UseGuards(AdminRefreshTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionPlansService.remove(+id);
  }
}
