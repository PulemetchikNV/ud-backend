import { Controller, Get } from '@nestjs/common';
import { DisposalService } from '../../modules/disposal/disposal.service';

@Controller('disposal')
export class DisposalController {
  constructor(private DisposalService: DisposalService) {}
  @Get('list')
  getList() {
    return this.DisposalService.findAll();
  }
}
