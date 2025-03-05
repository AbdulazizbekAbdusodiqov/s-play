import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCategoryContentDto {
    @ApiProperty({
        description: "Kategoriya ID raqami. Ushbu maydon majburiy.",
        example: 3,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly categoryId: number;

    @ApiProperty({
        description: "Kontent ID raqami. Ushbu maydon majburiy.",
        example: 15,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly contentId: number;
}
