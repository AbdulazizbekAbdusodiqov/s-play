import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    userId: number;
    @ApiProperty()
    avatar: string;
    @ApiProperty()
    languageId: number;
    @ApiProperty()
    age: number;
    @ApiProperty()
    password: string;
    @ApiProperty()
    confirm_password: string;
}
