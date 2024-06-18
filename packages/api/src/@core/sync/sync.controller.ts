import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CoreSyncService } from './sync.service';
import { LoggerService } from '../logger/logger.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiKeyAuthGuard } from '@@core/auth/guards/api-key.guard';

@ApiTags('syncs')
@Controller('syncs')
export class SyncController {
  constructor(
    private readonly syncService: CoreSyncService,
    private logger: LoggerService,
  ) {
    this.logger.setContext(SyncController.name);
  }

  @ApiOperation({
    operationId: 'getSyncStatus',
    summary: 'Retrieve sync status of a certain vertical',
  })
  @ApiResponse({ status: 200 })
  @Get('status/:vertical')
  getSyncStatus(@Param('vertical') vertical: string) {
    return this.syncService.getSyncStatus(vertical);
  }

  // this route must be protected for premium users (regular sync is one every 24 hours)
  @ApiOperation({
    operationId: 'resync',
    summary: 'Resync common objects across a vertical',
  })
  @ApiResponse({ status: 200 })
  @UseGuards(ApiKeyAuthGuard)
  @Get('resyncs/:user_id/:vertical')
  resync(@Param('user_id') user_id: string, @Param('vertical') vertical: string) {
    return this.syncService.resync(vertical, user_id);
  }
}
