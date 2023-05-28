import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AcceptanceService } from '../../modules/acceptance/acceptance.service';

@Controller('acceptance')
export class AcceptanceController {
  constructor(private acceptanceService: AcceptanceService) {}
  @Get('list')
  getList() {
    return this.acceptanceService.findAll();
  }

  @Get('show/:id')
  getShow(@Param('id', new ParseIntPipe()) id) {
    return this.acceptanceService.findOneById(id);
  }

  @Post('update/:id')
  update(@Param('id', new ParseIntPipe()) id, @Body() data) {
    return this.acceptanceService.updateById(id, data);
  }
  @Get('delete/:id')
  delete(@Param('id', new ParseIntPipe()) id) {
    return this.acceptanceService.deleteById(id);
  }
}
