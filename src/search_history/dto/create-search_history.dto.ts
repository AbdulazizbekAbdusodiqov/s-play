import { ApiProperty } from "@nestjs/swagger";

export class CreateSearchHistoryDto {
    @ApiProperty()
    profileId: number;
    @ApiProperty()
    search_query: string;
}
