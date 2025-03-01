import { ApiProperty } from "@nestjs/swagger";

enum BillingHistoryStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED",
  }

export class CreateBillingHistoryDto {
  @ApiProperty({ example: 1, description: "User ID" })
  userId: number;

  @ApiProperty({ example: 2, description: "Subscription ID" })
  subscriptionId: number;

  @ApiProperty({ example: 3, description: "Payment Method ID" })
  payment_methodId: number;

  @ApiProperty({ example: 100.50, description: "Payment amount" })
  amount: number;

  @ApiProperty({ example: "2024-03-05T12:00:00Z", description: "Payment date" })
  date: Date;

  @ApiProperty({
    example: BillingHistoryStatus.PENDING,
    description: "Billing status",
    enum: BillingHistoryStatus,
  })
  status: BillingHistoryStatus;
}