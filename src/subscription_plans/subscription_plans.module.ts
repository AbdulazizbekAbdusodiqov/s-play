import { Module } from '@nestjs/common';
import { SubscriptionPlansService } from './subscription_plans.service';
import { SubscriptionPlansController } from './subscription_plans.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService],
})
export class SubscriptionPlansModule {}
