import { Module } from '@nestjs/common';
import { WatchHistoryService } from './watch_history.service';
import { WatchHistoryController } from './watch_history.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WatchHistoryController],
  providers: [WatchHistoryService],
})
export class WatchHistoryModule {}
