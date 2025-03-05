import { Module } from '@nestjs/common';
import { ContentGenresService } from './content_genres.service';
import { ContentGenresController } from './content_genres.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContentGenresController],
  providers: [ContentGenresService],
})
export class ContentGenresModule {}
