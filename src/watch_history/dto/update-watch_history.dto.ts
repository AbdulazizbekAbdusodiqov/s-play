import { PartialType } from '@nestjs/swagger';
import { CreateWatchHistoryDto } from './create-watch_history.dto';

export class UpdateWatchHistoryDto extends PartialType(CreateWatchHistoryDto) {}
