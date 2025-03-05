import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsDate } from "class-validator";

export class CreateDeviceDto {
    @ApiProperty({
        description: "Foydalanuvchi ID'si (Int)",
        example: 1,
    })
    @IsInt()
    @IsNotEmpty()
    readonly userId: number;

    @ApiProperty({
        description: "Qurilma turi (mobil, kompyuter, planshet)",
        example: "mobil",
    })
    @IsString()
    @IsNotEmpty()
    readonly device_type: string;

    @ApiProperty({
        description: "Qurilma nomi (masalan, Samsung Galaxy A13)",
        example: "Samsung Galaxy A13",
    })
    @IsString()
    @IsNotEmpty()
    readonly device_name: string;

    @ApiProperty({
        description: "Foydalanuvchi kirgan IP manzili",
        example: "192.168.1.1",
    })
    @IsString()
    @IsOptional()
    readonly ip_address?: string;

    @ApiProperty({
        description: "Oxirgi faollik vaqti",
        example: "2024-03-03T14:30:00.000Z",
    })
    @IsOptional()
    readonly last_active?: Date;
}
