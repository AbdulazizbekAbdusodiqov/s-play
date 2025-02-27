import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
  }

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email : string
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly age : number
    
    @ApiProperty()
    @IsEnum(Gender)
    @IsNotEmpty()
    readonly gender : string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password : string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly confirm_password : string
}

