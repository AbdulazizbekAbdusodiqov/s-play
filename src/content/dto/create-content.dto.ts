import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateContentDto {
    @ApiProperty({
        description: "Kontent nomi. Bu maydon majburiy.",
        example: "Titanik",
    })
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({
        description: "Chiqarilgan yil. Bu maydon majburiy.",
        example: 1997,
    })
    @IsInt()
    @IsNotEmpty()
    readonly release_year: number;

    @ApiProperty({
        description: "Kontent tavsifi. Bu maydon majburiy.",
        example: "Bu film Titanik kemasining fojiali voqeasiga asoslangan.",
    })
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty({
        description: "Film yoki serialning davomiyligi (daqiqa). Bu maydon majburiy.",
        example: 195,
    })
    @IsInt()
    @IsNotEmpty()
    readonly duration: number;

    @ApiProperty({
        description: "Treyler URL manzili. Bu maydon ixtiyoriy.",
        example: "https://www.youtube.com/watch?v=ZQ6klONCq4s",
    })
    @IsString()
    @IsOptional()
    readonly trailer_url: string;

    @ApiProperty({
        description: "Kontentning o‘rtacha reytingi. Bu maydon majburiy.",
        example: 8,
    })
    @IsInt()
    @IsNotEmpty()
    readonly average_rating: number;

    @ApiProperty({
        description: "Kontent mavjudligi. Agar `true` bo‘lsa, tomosha qilish mumkin.",
        example: true,
    })
    @IsBoolean()
    @IsNotEmpty()
    readonly is_available: boolean;

    @ApiProperty({
        description: "Ishlab chiqarilgan davlat nomi. Bu maydon majburiy.",
        example: "AQSh",
    })
    @IsString()
    @IsNotEmpty()
    readonly country_of_origin: string;

    @ApiProperty({
        description: "Kontent turi (film, serial va h.k.). Bu maydon majburiy.",
        example: "film",
    })
    @IsString()
    @IsNotEmpty()
    readonly content_type: string;
}
