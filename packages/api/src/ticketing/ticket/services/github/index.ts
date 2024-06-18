import { Injectable } from '@nestjs/common';
import { LoggerService } from '@@core/logger/logger.service';
import { PrismaService } from '@@core/prisma/prisma.service';
import { EncryptionService } from '@@core/encryption/encryption.service';
import { TicketingObject } from '@ticketing/@lib/@types';
import { ITicketService } from '@ticketing/ticket/types';
import { ApiResponse } from '@@core/utils/types';
import axios from 'axios';
import { ActionType, handle3rdPartyServiceError } from '@@core/utils/errors';
import { ServiceRegistry } from '../registry.service';
import { GithubTicketInput, GithubTicketOutput } from './types';

//TODO
@Injectable()
export class GithubService implements ITicketService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private cryptoService: EncryptionService,
    private registry: ServiceRegistry,
  ) {
    this.logger.setContext(
      TicketingObject.ticket.toUpperCase() + ':' + GithubService.name,
    );
    this.registry.registerService('github', this);
  }
  async addTicket(
    ticketData: GithubTicketInput,
    linkedUserId: string,
  ): Promise<ApiResponse<GithubTicketOutput>> {
    try {
      const connection = await this.prisma.connections.findFirst({
        where: {
          id_linked_user: linkedUserId,
          provider_slug: 'github',
          vertical: 'ticketing',
        },
      });
      const dataBody = ticketData;
      const org = '';
      const repo = '';
      const resp = await axios.post(
        `${connection.account_url}/repos/${org}/${repo}/issues`,
        JSON.stringify(dataBody),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.cryptoService.decrypt(
              connection.access_token,
            )}`,
          },
        },
      );
      return {
        data: resp.data,
        message: 'Github ticket created',
        statusCode: 201,
      };
    } catch (error) {
      handle3rdPartyServiceError(
        error,
        this.logger,
        'github',
        TicketingObject.ticket,
        ActionType.POST,
      );
    }
  }
  
  async syncTickets(
    linkedUserId: string,
    remote_ticket_id?: string,
    custom_properties?: string[],
  ): Promise<ApiResponse<GithubTicketOutput[]>> {
    try {
      const connection = await this.prisma.connections.findFirst({
        where: {
          id_linked_user: linkedUserId,
          provider_slug: 'github',
          vertical: 'ticketing',
        },
      });
      const owner = '';
      const repo = '';
      const resp = await axios.get(`${connection.account_url}/repos/issues`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.cryptoService.decrypt(
            connection.access_token,
          )}`,
        },
      });
      this.logger.log(`Synced github tickets !`);

      return {
        data: resp.data,
        message: 'Github tickets retrieved',
        statusCode: 200,
      };
    } catch (error) {
      handle3rdPartyServiceError(
        error,
        this.logger,
        'github',
        TicketingObject.ticket,
        ActionType.GET,
      );
    }
  }
}
