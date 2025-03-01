import { ApiProperty } from "@nestjs/swagger";

export class CreateSubscriptionPlanDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    monthly_price: number;
    @ApiProperty()
    max_frofile: number;
    @ApiProperty()
    max_screens: number;
    @ApiProperty()
    download_enbled: boolean;
    @ApiProperty()
    ads_enabled: boolean;
}
