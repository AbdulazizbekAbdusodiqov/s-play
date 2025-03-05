import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max } from 'class-validator';

export class CreateRatingDto {
    @ApiProperty({ example: 1 })
    @IsInt()
    profile_id: number;

    @ApiProperty({ example: 10 })
    @IsInt()
    content_id: number;

    @ApiProperty({ example: 5 })
    @IsInt()
    @Min(1)
    @Max(5)
    rating_value: number;

    @ApiProperty({ example: '2025-03-03T12:00:00Z' })
    created_at: Date;
}