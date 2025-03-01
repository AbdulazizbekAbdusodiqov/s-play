import { PartialType } from '@nestjs/swagger';
import { CreateBillingHistoryDto } from './create-billing_history.dto';

export class UpdateBillingHistoryDto extends PartialType(CreateBillingHistoryDto) {}
