import { PartialType } from '@nestjs/swagger';
import { CreateCategoryContentDto } from './create-category-content.dto';

export class UpdateCategoryContentDto extends PartialType(CreateCategoryContentDto) {}
