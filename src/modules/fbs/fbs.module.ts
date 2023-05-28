import { Module } from '@nestjs/common';
import { FbsService } from './fbs.service';
import { fbsProviders } from './fbs.providers';
@Module({
  providers: [FbsService, ...fbsProviders],
  exports: [FbsService],
})
export class FbsModule {}
