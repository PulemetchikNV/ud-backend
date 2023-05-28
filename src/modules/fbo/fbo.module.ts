import { Module } from '@nestjs/common';
import { FboService } from './fbo.service';
import { fboProviders } from './fbo.providers';
@Module({
  providers: [FboService, ...fboProviders],
  exports: [FboService],
})
export class FboModule {}
