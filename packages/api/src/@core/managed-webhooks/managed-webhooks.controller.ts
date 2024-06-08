import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  UseGuards,
} from '@nestjs/common';
import { LoggerService } from '@@core/logger/logger.service';
import { ApiBody, ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ManagedWebhooksService } from './managed-webhooks.service';
import {
  SignatureVerificationDto,
  ManagedWebhooksDto,
} from './dto/managed-webhooks.dto';
import { JwtAuthGuard } from '@@core/auth/guards/jwt-auth.guard';

@ApiTags('managed-webhooks')
@Controller('managed-webhooks')
export class ManagedWebhooksController {
  constructor(
    private managedWebhookService: ManagedWebhooksService,
    private loggerService: LoggerService,
  ) {
    this.loggerService.setContext(ManagedWebhooksController.name);
  }

  @ApiOperation({
    operationId: 'getManagedWebhooks',
    summary: 'Retrieve managed webhooks',
  })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Get(':id_connection')
  getManagedWebhook(@Param('id_connection') id_connection: string) {
    return this.managedWebhookService.getManagedWebhook(id_connection);
  }

  @ApiOperation({
    operationId: 'updateManagedWebhooksStatus',
    summary: 'Update managed webhook status',
  })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateManagedWebhooksStatus(
    @Param('id') id: string,
    @Body('active') active: boolean,
  ) {
    return this.managedWebhookService.updateStatusManagedWebhookEndpoint(
      id,
      active,
    );
  }

  @ApiOperation({
    operationId: 'createManagedWebhook',
    summary: 'Create managed webhook',
  })
  @ApiBody({ type: ManagedWebhooksDto })
  @ApiResponse({ status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post()
  async addManagedWebhook(@Body() data: ManagedWebhooksDto) {
    return this.managedWebhookService.createManagedWebhook(data);
  }

  /*@ApiOperation({
    operationId: 'verifyEvent',
    summary: 'Verify payload sgnature of the webhook',
  })
  @ApiBody({ type: SignatureVerificationDto })
  @ApiResponse({ status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post('verifyEvent')
  async verifyPayloadSignature(@Body() data: SignatureVerificationDto) {
    const { payload, signature, secret } = data;
    return this.managedWebhookService.verifyPayloadSignature(
      payload,
      signature,
      secret,
    );
  }*/
}
