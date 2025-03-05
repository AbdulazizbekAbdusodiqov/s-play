import { Module } from '@nestjs/common';
import { CategoryContentService } from './category-content.service';
import { CategoryContentController } from './category-content.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
  controllers: [CategoryContentController],
  providers: [CategoryContentService],
})
export class CategoryContentModule {}
