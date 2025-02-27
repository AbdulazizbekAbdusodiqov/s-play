import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    first_name: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    last_name: string;
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password:string
    confirm_password:string
}
