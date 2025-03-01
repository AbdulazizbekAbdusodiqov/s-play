import { Module } from '@nestjs/common';
import { BillingHistoryService } from './billing_history.service';
import { BillingHistoryController } from './billing_history.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [BillingHistoryController],
  providers: [BillingHistoryService],
})
export class BillingHistoryModule {}
