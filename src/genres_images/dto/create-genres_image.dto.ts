import { ApiProperty } from "@nestjs/swagger";

export class CreateGenresImageDto {
    @ApiProperty()
    image_url: string;
    @ApiProperty()
    genresId: number;
    @ApiProperty()
    is_main: boolean;
}
