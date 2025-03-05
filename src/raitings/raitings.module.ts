import { Module } from '@nestjs/common';
import { RaitingsService } from './raitings.service';
import { RaitingsController } from './raitings.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
  controllers: [RaitingsController],
  providers: [RaitingsService],
})
export class RaitingsModule {}
