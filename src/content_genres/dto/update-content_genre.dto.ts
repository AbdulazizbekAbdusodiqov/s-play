import { PartialType } from '@nestjs/swagger';
import { CreateContentGenreDto } from './create-content_genre.dto';

export class UpdateContentGenreDto extends PartialType(CreateContentGenreDto) {}
