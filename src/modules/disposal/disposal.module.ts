import { Module } from '@nestjs/common';
import { DisposalService } from './disposal.service';
import { disposalProviders } from './disposal.providers';
@Module({
  providers: [DisposalService, ...disposalProviders],
  exports: [DisposalService],
})
export class DisposalModule {}
