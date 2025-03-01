import { ApiProperty } from "@nestjs/swagger";

export class CreateSubscriptionDto {
    @ApiProperty()
    profileId: number;
    @ApiProperty()
    planId: number;
    @ApiProperty()
    start_date: string;
    @ApiProperty()
    end_date: string;
    @ApiProperty()
    auto_renew: boolean;
    @ApiProperty()
    last_amount_paid: number;
    @ApiProperty()
    suvscription_source: string;
}
