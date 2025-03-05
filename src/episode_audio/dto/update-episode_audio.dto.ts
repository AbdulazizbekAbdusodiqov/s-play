import { PartialType } from '@nestjs/swagger';
import { CreateEpisodeAudioDto } from './create-episode_audio.dto';

export class UpdateEpisodeAudioDto extends PartialType(CreateEpisodeAudioDto) {}
