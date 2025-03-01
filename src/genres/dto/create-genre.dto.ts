import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
}
