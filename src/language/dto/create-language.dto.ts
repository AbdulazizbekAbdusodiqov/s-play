import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {
    @ApiProperty()
    name: string;
}
