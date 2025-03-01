import { PartialType } from '@nestjs/swagger';
import { CreateGenresImageDto } from './create-genres_image.dto';

export class UpdateGenresImageDto extends PartialType(CreateGenresImageDto) {}
