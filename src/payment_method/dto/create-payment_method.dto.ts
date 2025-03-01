import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentMethodDto {
    @ApiProperty()
    name:string
}
