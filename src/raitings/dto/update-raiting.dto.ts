import { PartialType } from '@nestjs/swagger';
import { CreateRatingDto } from './create-raiting.dto';

export class UpdateRaitingDto extends PartialType(CreateRatingDto) {}
